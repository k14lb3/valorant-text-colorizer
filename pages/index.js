import { useState, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Head from 'next/head';
import Label from 'components/Label';
import InputText from 'components/InputText';
import Button from 'components/Button';

const Home = () => {
  const textRef = useRef();
  const [generatedText, setGeneratedText] = useState('');

  const generateText = () => {
    let text = textRef.current.value;
    let outputText = '';
    let colored = { state: false, input: '' };
    let color = { state: false, input: '' };

    for (let i = 0; i < text.length; i++) {
      if (colored.state) {
        if (color.state) {
          if (text[i] === ')') {
            let tag = '';

            switch (color.input.trim()) {
              case 'r':
                tag = '<enemy>';
                break;
              case 'b':
                tag = '<team>';
                break;
              case 'y':
                tag = '<system>';
                break;
              case 'g':
                tag = '<notification>';
                break;
              case 'p':
                tag = '<warning>';
                break;
              default:
                return;
            }

            outputText += `${tag}${colored.input}</>`;

            colored.state = false;
            colored.input = '';
            color.state = false;
            color.input = '';
          } else {
            color.input += text[i];
          }
        } else {
          if (text[i] === ',') {
            color.state = true;
          } else {
            colored.input += text[i];
          }
        }
      } else if (text[i] === '(') {
        colored.state = true;
      } else {
        outputText += text[i];
      }
      setGeneratedText(outputText);
    }
  };

  return (
    <>
      <Head>
        <title>Valorant Text Colorizer</title>
      </Head>
      <div className="flex flex-col w-192 py-8 px-12 mx-auto border-2 border-black bg-white rounded">
        <Label className="mb-5 ">Input text</Label>
        <InputText ref={textRef} className="mb-5" />
        <Button className="w-1/2 mx-auto" onClick={generateText}>
          Generate
        </Button>
        {generatedText && (
          <>
            <Label className="pt-5 my-5 border-t-2 border-black">
              Generated text
            </Label>
            <CopyToClipboard text={generatedText}>
              <div className="p-4 bg-pampas cursor-pointer">
                <p style={{ whiteSpace: 'break-spaces' }} className="text-2xl">
                  {generatedText}
                </p>
              </div>
            </CopyToClipboard>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
