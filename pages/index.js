import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const router = useRouter();

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  const callOpenAIEndpoints = (input) => {
    if (input < 2) {
      return;
    }
    //navigate to results page
    router.push({
      pathname: "/results",
      query: { question: input },
    });
    //callAnswerQuestion(input);
  };

  const GenerateButton = ({ title }) => (
    <div className="prompt-buttons">
      <a
        className="generate-button"
        onClick={() => callOpenAIEndpoints(userInput)}
      >
        <div className="generate">
          <p>{title}</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="root">
      <Head>
        <title>LoL GPT</title>
      </Head>
      <div className="container vertical-center">
        <div className="header">
          <div className="header-title">
            <h1>Ask any question about League of Legends</h1>
          </div>

          <div className="form-group ml-auto mr-auto">
            <textarea
              placeholder="Enter question here.
                Example: Who is an easy jungler to learn?"
              className="prompt-box"
              value={userInput}
              onChange={onUserChangedText}
            />

            <GenerateButton title="Generate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
