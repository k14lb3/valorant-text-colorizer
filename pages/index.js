import Head from 'next/head';
import Label from 'components/Label';
import InputText from 'components/InputText';

const Home = () => {
  return (
    <>
      <Head>
        <title>Valorant Text Colorizer</title>
      </Head>
      <div className="flex flex-col w-96 p-8 mx-auto border-2 border-black bg-white rounded">
        <Label className="mb-5">Input text</Label>
        <InputText />
      </div>
    </>
  );
};

export default Home;
