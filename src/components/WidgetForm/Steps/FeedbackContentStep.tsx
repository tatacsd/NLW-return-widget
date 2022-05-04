import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../../CloseButton";
import { feedbackTypes, FeedbackTypes } from "./FeedbackTypeStep";
import { ScreenShotButton } from "./ScreenShotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackTypes;
  onFeedbackRestartRequest: () => void;
  onFeedbackSent: (type: boolean) => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequest,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const selectedFeedBack = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({ comment, screenshot });
    if (comment || screenshot) {
      onFeedbackSent(true);
    }
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={() => onFeedbackRestartRequest()}
        >
          <ArrowLeft className="w-4 h-4" weight="bold" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={selectedFeedBack.source}
            alt={selectedFeedBack.alt}
            className="w-6 h-6"
          />
          {selectedFeedBack.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleFormSubmit} className="my-4 w-full">
        <textarea
          className="min-w[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Write here in details what is the problem you are facing"
          onChange={(e) => setComment(e.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            onScreenshot={setScreenshot}
            previewScreenshot={screenshot}
          />
          <button
            type="submit"
            disabled={!comment}
            className={`p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500`}
          >
            Send feedback
          </button>
        </footer>
      </form>
    </>
  );
}
