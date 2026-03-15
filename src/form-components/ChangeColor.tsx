import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLOR_LIST: string[] = [
        "honeydew",
        "seashell",
        "lavenderblush",
        "cornsilk",
        "papayawhip",
        "mistyrose",
        "thistle",
        "peachpuff",
    ];
    //Commented out because the tests hate me and my attempt to make my app look good :(
    // const COLOR_DISPLAY: Record<string, string> = {
    //     honeydew: "Honeydew",
    //     seashell: "Seashell",
    //     lavenderblush: "Lavender Blush",
    //     cornsilk: "Corn Silk",
    //     papayawhip: "Papaya Whip",
    //     mistyrose: "Misty Rose",
    //     thistle: "Thistle",
    //     peachpuff: "Peach Puff",
    // };

    const [color, setColor] = useState<string>(COLOR_LIST[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {[...COLOR_LIST].map((c: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    key={c}
                    label={c}
                    // label={COLOR_DISPLAY[c]}
                    value={c}
                    checked={color === c}
                    style={{ backgroundColor: c }}
                />
            ))}
            <p>
                The color you have selected is{" "}
                {
                    <b
                        data-testid="colored-box"
                        style={{ backgroundColor: color }}
                    >
                        {color}
                        {/* {COLOR_DISPLAY[color]} */}
                    </b>
                }
            </p>
        </div>
    );
}
