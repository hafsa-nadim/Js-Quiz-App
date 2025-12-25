var quizData = {

/* ================= EASY (30) ================= */
easy: [

{ question: "What does alert('Hi') do?", options: ["Shows popup", "Logs text", "Takes input", "Stops code"], answer: 0 },
{ question: "Which keyword is used to store text?", options: ["num", "text", "var", "int"], answer: 2 },
{ question: "Which is a string?", options: ["123", "'Hello'", "true", "10"], answer: 1 },
{ question: "Which variable name is valid?", options: ["1user", "user-name", "_user", "var"], answer: 2 },
{ question: "Which operator adds numbers?", options: ["+", "-", "*", "%"], answer: 0 },

{ question: "What is the result of 5 + 5?", options: ["10", "55", "Error", "None"], answer: 0 },
{ question: "Which symbol is used for multiplication?", options: ["+", "*", "/", "-"], answer: 1 },
{ question: "What does prompt() do?", options: ["Show message", "Take input", "Print value", "Run loop"], answer: 1 },
{ question: "Which keyword is used for condition?", options: ["if", "for", "var", "alert"], answer: 0 },
{ question: "Which operator checks equality?", options: ["=", "==", "+", "*"], answer: 1 },

{ question: "Which statement runs when condition is false?", options: ["if", "else", "for", "switch"], answer: 1 },
{ question: "Which is a comparison operator?", options: ["+", "=", "==", "*"], answer: 2 },
{ question: "Which keyword creates array?", options: ["{}", "()", "[]", "<>"], answer: 2 },
{ question: "Array index starts from?", options: ["1", "0", "-1", "Any"], answer: 1 },
{ question: "Which loop repeats code?", options: ["if", "alert", "for", "prompt"], answer: 2 },

{ question: "What does break do?", options: ["Stops loop", "Restarts loop", "Skips value", "Ends program"], answer: 0 },
{ question: "Which method changes text to uppercase?", options: ["upper()", "toUpperCase()", "capitalize()", "change()"], answer: 1 },
{ question: "Which gives string length?", options: ["size", "length", "count", "total"], answer: 1 },
{ question: "Which finds text in string?", options: ["search()", "find()", "indexOf()", "locate()"], answer: 2 },
{ question: "Which replaces text?", options: ["replace()", "change()", "swap()", "edit()"], answer: 0 },

{ question: "Which rounds number?", options: ["round()", "fix()", "int()", "parse()"], answer: 0 },
{ question: "Which generates random number?", options: ["Math.random()", "Math.floor()", "Math.round()", "Math.max()"], answer: 0 },
{ question: "Which converts string to number?", options: ["parseInt()", "toString()", "Number()", "Both A & C"], answer: 3 },
{ question: "Which converts number to string?", options: ["parse()", "String()", "Number()", "Math()"], answer: 1 },
{ question: "Which gives current date?", options: ["new Date()", "Date.now()", "getDate()", "today()"], answer: 0 },

{ question: "Which extracts year?", options: ["getYear()", "getFullYear()", "getMonth()", "getDay()"], answer: 1 },
{ question: "Which sets custom date?", options: ["new Date()", "Date.set()", "createDate()", "makeDate()"], answer: 0 },
{ question: "Which changes date value?", options: ["setDate()", "getDate()", "changeDate()", "editDate()"], answer: 0 },
{ question: "Which keyword defines function?", options: ["func", "method", "function", "define"], answer: 2 },
{ question: "Which keyword stops function?", options: ["stop", "return", "break", "exit"], answer: 1 }

],

/* ================= MEDIUM (30) ================= */
medium: [

{ question: "What is output of '5' + 5?", options: ["10", "55", "Error", "NaN"], answer: 1 },
{ question: "Which operator avoids ambiguity?", options: ["()", "{}", "[]", "<>"], answer: 0 },
{ question: "Which adds item to array end?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },
{ question: "Which removes last array item?", options: ["pop()", "push()", "shift()", "slice()"], answer: 0 },
{ question: "Which removes first array item?", options: ["shift()", "pop()", "push()", "splice()"], answer: 0 },

{ question: "Which inserts item at index?", options: ["slice()", "splice()", "push()", "shift()"], answer: 1 },
{ question: "Which extracts array part?", options: ["slice()", "splice()", "cut()", "extract()"], answer: 0 },
{ question: "What does continue do?", options: ["Stops loop", "Skips iteration", "Ends program", "Restarts loop"], answer: 1 },
{ question: "Which checks multiple conditions?", options: ["&&", "||", "!", "All"], answer: 3 },
{ question: "Which operator means AND?", options: ["||", "&&", "==", "!"], answer: 1 },

{ question: "Which is nested if?", options: ["if inside if", "if after loop", "if in function", "if only"], answer: 0 },
{ question: "Which loop runs fixed times?", options: ["for", "while", "do while", "if"], answer: 0 },
{ question: "Which finds character at index?", options: ["charAt()", "indexOf()", "slice()", "substr()"], answer: 0 },
{ question: "Which extracts string part?", options: ["slice()", "replace()", "split()", "find()"], answer: 0 },
{ question: "Which rounds down?", options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.fix()"], answer: 0 },

{ question: "Which rounds up?", options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.int()"], answer: 0 },
{ question: "Which limits decimals?", options: ["toFixed()", "parseInt()", "round()", "fix()"], answer: 0 },
{ question: "Which gets hours?", options: ["getHours()", "getTime()", "getDate()", "getDay()"], answer: 0 },
{ question: "Which gets month?", options: ["getMonth()", "getDate()", "getDay()", "getYear()"], answer: 0 },
{ question: "Which returns milliseconds?", options: ["getTime()", "getSeconds()", "getHours()", "now()"], answer: 0 },

{ question: "What is function?", options: ["Variable", "Loop", "Reusable block", "Condition"], answer: 2 },
{ question: "How data passed to function?", options: ["Parameters", "Return", "Loop", "Array"], answer: 0 },
{ question: "Which sends value back?", options: ["return", "break", "alert", "prompt"], answer: 0 },
{ question: "Local variable exists where?", options: ["Inside function", "Everywhere", "Global only", "Outside"], answer: 0 },
{ question: "Global variable exists where?", options: ["Everywhere", "Function only", "Block only", "Loop only"], answer: 0 },

{ question: "Which starts switch?", options: ["switch()", "case", "break", "default"], answer: 0 },
{ question: "Which matches case?", options: ["if", "case", "switch", "break"], answer: 1 },
{ question: "Which exits switch?", options: ["break", "return", "exit", "stop"], answer: 0 },
{ question: "Which runs if no case matched?", options: ["default", "else", "if", "case"], answer: 0 },
{ question: "Which avoids fall-through?", options: ["break", "continue", "return", "stop"], answer: 0 }

],

/* ================= HARD (30) ================= */
hard: [

{ question: "Output of var x=5; x+=5?", options: ["5", "10", "55", "Error"], answer: 1 },
{ question: "Output of Math.round(4.5)?", options: ["4", "5", "4.5", "Error"], answer: 1 },
{ question: "Output of Math.floor(4.9)?", options: ["4", "5", "Error", "None"], answer: 0 },
{ question: "Output of Math.ceil(4.1)?", options: ["4", "5", "Error", "None"], answer: 1 },
{ question: "Output of parseInt('10.5')?", options: ["10", "10.5", "Error", "NaN"], answer: 0 },

{ question: "Output of Number('10a')?", options: ["10", "NaN", "Error", "undefined"], answer: 1 },
{ question: "Which gives random 1–10?", options: ["Math.floor(Math.random()*10)+1", "Math.random(10)", "Math.ceil()", "Math.round()"], answer: 0 },
{ question: "Which fixes 2 decimals?", options: ["num.toFixed(2)", "Math.round()", "parseInt()", "Number()"], answer: 0 },
{ question: "What does new Date(2025,0,1) show?", options: ["Jan 1 2025", "Feb 1 2025", "Error", "Undefined"], answer: 0 },
{ question: "Month index starts from?", options: ["0", "1", "-1", "Any"], answer: 0 },

{ question: "Which gets day number?", options: ["getDay()", "getDate()", "getMonth()", "getTime()"], answer: 0 },
{ question: "Which changes month?", options: ["setMonth()", "getMonth()", "changeMonth()", "editMonth()"], answer: 0 },
{ question: "Function inside function is?", options: ["Nested function", "Callback", "Loop", "Error"], answer: 0 },
{ question: "Which variable has priority?", options: ["Local", "Global", "Both", "None"], answer: 0 },
{ question: "Which executes first?", options: ["Function call", "Function declaration", "Return", "Alert"], answer: 1 },

{ question: "Output of '5' == 5?", options: ["true", "false", "Error", "NaN"], answer: 0 },
{ question: "Output of '5' === 5?", options: ["true", "false", "Error", "NaN"], answer: 1 },
{ question: "Which operator checks value & type?", options: ["===", "==", "=", "!"], answer: 0 },
{ question: "Which loop runs at least once?", options: ["do while", "while", "for", "if"], answer: 0 },
{ question: "Which skips loop step?", options: ["continue", "break", "return", "stop"], answer: 0 },

{ question: "Which stops only loop?", options: ["break", "return", "exit", "stop"], answer: 0 },
{ question: "Which checks OR condition?", options: ["||", "&&", "==", "!"], answer: 0 },
{ question: "Which negates condition?", options: ["!", "&&", "||", "=="], answer: 0 },
{ question: "Which creates empty array?", options: ["[]", "{}", "()", "new Object()"], answer: 0 },
{ question: "Which creates empty function?", options: ["function(){}", "{}", "()", "[]"], answer: 0 },

{ question: "Switch without break causes?", options: ["Fall-through", "Error", "Stop", "Skip"], answer: 0 },
{ question: "Default runs when?", options: ["No case match", "First case", "Always", "Never"], answer: 0 },
{ question: "Which keyword exits function?", options: ["return", "break", "stop", "exit"], answer: 0 },
{ question: "Which stores reusable logic?", options: ["Function", "Array", "Loop", "Condition"], answer: 0 },
{ question: "Which is NOT loop?", options: ["if", "for", "while", "do while"], answer: 0 }

]

};
