import bugImageUrl from "../../../assets/Bug.svg";
import ideaImageUrl from "../../../assets/Idea.svg";
import thoughtImageUrl from "../../../assets/Thought.svg";
import { CloseButton } from "../../CloseButton";

export const feedbackTypes = {
  BUG: {
    title: "Issues",
    source: bugImageUrl,
    alt: "Report a bug or request a feature - Image of a bug",
  },
  IDEA: {
    title: "Ideas",
    source: ideaImageUrl,
    alt: "Share an idea or suggestion - Image of a lightbulb",
  },
  OTHER: {
    title: "Other",
    source: thoughtImageUrl,
    alt: "Share any other feedback - Image of a thought bubble",
  },
};

// select only the keys from the feedbackTypes object
export type FeedbackTypes = keyof typeof feedbackTypes;

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackTypes) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChange,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Leave a feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, { title, source, alt }]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              onClick={() => onFeedbackTypeChange(key as FeedbackTypes)} //infers the type of key
            >
              <img src={source} alt={alt} />
              <span>{title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
