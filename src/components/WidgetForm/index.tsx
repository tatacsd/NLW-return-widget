import { useState } from "react";
import {
  feedbackTypes,
  FeedbackTypes,
  FeedbackTypeStep,
} from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setIsFeedbackSent(false);
    setFeedbackType(null);
  };

  const FeedbackSteps = () => {
    return (
      <>
        {!feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
        ) : (
          <FeedbackContentStep
            feedbackType={feedbackType}
            onFeedbackRestartRequest={handleRestartFeedback}
            onFeedbackSent={setIsFeedbackSent}
          />
        )}
      </>
    );
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {isFeedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback} />
      ) : (
        <FeedbackSteps />
      )}

      <footer className="text-xs text-neutral-400">
        Created by {` `}
        <a
          className="underline underline-offset-2"
          href="https://github.com/tatacsd"
        >
          Thays
        </a>
      </footer>
    </div>
  );
}
