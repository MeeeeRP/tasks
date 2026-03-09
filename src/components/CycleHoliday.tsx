import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "Hannukkah"
    | "Thanksgivikah"
    | "Passover"
    | "Rosh Hashannah"
    | "Purim";

export function CycleHoliday(): React.JSX.Element {
    const HOLIDAY_ALPHABET: Record<Holiday, Holiday> = {
        Hannukkah: "Passover",
        Passover: "Purim",
        Purim: "Rosh Hashannah",
        "Rosh Hashannah": "Thanksgivikah",
        Thanksgivikah: "Hannukkah",
    };

    const HOLIDAY_TIME: Record<Holiday, Holiday> = {
        "Rosh Hashannah": "Thanksgivikah",
        Thanksgivikah: "Hannukkah",
        Hannukkah: "Purim",
        Purim: "Passover",
        Passover: "Rosh Hashannah",
    };

    const HOLIDAY_DISPLAY: Record<Holiday, string> = {
        Hannukkah: "🕎",
        Thanksgivikah: "🦃",
        Passover: "🚫🍞",
        "Rosh Hashannah": "🍎🍯",
        Purim: "🎭",
    };

    const [holiday, setHoliday] = useState<Holiday>("Hannukkah");

    return (
        <div>
            <Button
                onClick={() => {
                    setHoliday(HOLIDAY_ALPHABET[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(HOLIDAY_TIME[holiday]);
                }}
            >
                Advance by Time of the Year
            </Button>
            Current Holiday: {HOLIDAY_DISPLAY[holiday]}
        </div>
    );
}
