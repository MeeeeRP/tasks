import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question",
    );

    function updateType(): void {
        questionType === "short_answer_question" ?
            setType("multiple_choice_question")
        :   setType("short_answer_question");
    }
    return (
        <div>
            <Button onClick={updateType}>Change Type</Button>
            The question is a
            {questionType === "short_answer_question" ?
                " Short Answer "
            :   " Multiple Choice "}
            question.
        </div>
    );
}
