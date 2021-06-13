import { useState, useRef } from 'react';
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
    let coloredText = '';
    let colored = false;
    let color = false;

    for (let i = 0; i < text.length; i++) {
      if (colored) {
        if (color) {
          let tag = '';

          switch (text[i].toLowerCase()) {
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
            case ')':
              color = false;
              colored = false;
              outputText += `${coloredText}</>`;
              coloredText = '';
            case ' ':
              break;
            default:
              return;
          }
          coloredText = `${tag}${coloredText}`;
        } else {
          if (text[i] === ',') {
            color = true;
          } else {
            coloredText += text[i];
          }
        }
      } else if (text[i] === '(') {
        colored = true;
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
            <div className="p-4 bg-pampas">
              <p className="text-2xl">{generatedText}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
