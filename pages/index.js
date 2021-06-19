import { useState, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Head from 'next/head';
import Label from 'components/Label';
import InputText from 'components/InputText';
import Button from 'components/Button';
import PopupNotification from 'components/PopupNotification';

const Home = () => {
  const textRef = useRef();
  const [generatedText, setGeneratedText] = useState('<team>Hello</>');
  const [popupNotification, setPopupNotification] = useState('');

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
                setPopupNotification('Cannot generate text');
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
      setPopupNotification('Text generated');
    }
  };

  return (
    <>
      <Head>
        <title>Valorant Text Colorizer</title>
      </Head>
      {popupNotification && (
        <PopupNotification
          popupNotificationState={{
            popupNotification: popupNotification,
            setPopupNotification: setPopupNotification,
          }}
          text={popupNotification}
        />
      )}
      <div className="w-full max-w-336 mx-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full py-8 px-12 mx-auto border-2 border-black bg-black rounded text-red">
            <h2 className="text-pampas pb-5 mb-5 border-b-2 border-red">
              Available colors
            </h2>
            <ul className="list-disc ml-10 text-2xl">
              <li>
                <div className="grid grid-cols-3 text-pampas">
                  <span>Red</span>
                  <span>-</span>
                  <span>R / r</span>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-3 text-pampas">
                  <span>Blue</span>
                  <span>-</span>
                  <span>B / b</span>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-3 text-pampas">
                  <span>Yellow</span>
                  <span>-</span>
                  <span>Y / y</span>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-3 text-pampas">
                  <span>Green</span>
                  <span>-</span>
                  <span>G / g</span>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-3 text-pampas">
                  <span>Pink</span>
                  <span>-</span>
                  <span>P / p</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-full py-8 px-12 pb-9 mx-auto border-2 border-black bg-white rounded">
            <h2 className="pb-5 mb-5 border-b-2 border-black">Input text</h2>
            <InputText
              ref={textRef}
              defaultValue="(Hello, b)"
              className="w-full mb-5"
            />
            <Button className="w-full lg:w-2/4 mx-auto" onClick={generateText}>
              Generate
            </Button>
            <h2 className="pb-5 my-5 border-b-2 border-black">
              Generated text
            </h2>
            <CopyToClipboard
              text={generatedText}
              onCopy={() => {
                setPopupNotification('Text copied');
              }}
            >
              <div className="group relative p-4 bg-pampas cursor-pointer border-2 border-pampas rounded hover:border-red duration-200">
                <div className="opacity-0 absolute py-2 px-4 top-0 left-2/4 bg-red rounded text-pampas text-xl whitespace-nowrap duration-200 group-hover:opacity-100 group-hover:-top-full">
                  Click to copy
                </div>
                <p style={{ whiteSpace: 'break-spaces' }} className="text-2xl">
                  {generatedText}
                </p>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
