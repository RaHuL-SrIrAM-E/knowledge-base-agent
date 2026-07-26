type SuggestedQuestionsProps = {
  questions: string[];
  onSelect: (question: string) => void;
};

export function SuggestedQuestions({
  questions,
  onSelect,
}: SuggestedQuestionsProps) {
  return (
    <div className="suggested-questions">
      <p className="suggested-label">Suggested questions</p>
      <div className="suggested-grid">
        {questions.map((question) => (
          <button
            key={question}
            type="button"
            className="suggested-chip"
            onClick={() => onSelect(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
