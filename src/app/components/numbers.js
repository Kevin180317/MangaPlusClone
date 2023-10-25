import React from "react";

const caps = [];

for (let i = 1; i <= 239; i++) {
    caps.push({
        label: i.toString(),
        value: i.toString(),
        description: `Number ${i}`,
    });
}

export default caps;
