import React from "react"
import Entry from "./Entry"
import emojipedia from "../emojipedia"

function createEntry(emojiRef) {
    return <Entry
    key = { emojiRef.id }
    emoji = { emojiRef.emoji }
    name = { emojiRef.name }
    quote = { emojiRef.meaning }
    />
};


function App() {
    return ( <div >
        <h1 >
        <span>EmojiGit</span></h1>

        <dl className = "dictionary" > { emojipedia.map(createEntry) } </dl> </div>
    );
}

export default App;