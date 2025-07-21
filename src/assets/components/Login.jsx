import React, { useState } from "react";
import { signInAnonymously } from "firebase/auth";
import { auth, db } from "../../firebase.js";
import "./app.css";
import { doc, setDoc } from "firebase/firestore";

const languages = [
  "Afrikaans",
  "Albanian",
  "Amharic",
  "Arabic",
  "Armenian",
  "Azerbaijani",
  "Basque",
  "Belarusian",
  "Bengali",
  "Bosnian",
  "Bulgarian",
  "Burmese",
  "Catalan",
  "Cebuano",
  "Chichewa",
  "Chinese",
  "Corsican",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "Esperanto",
  "Estonian",
  "Filipino",
  "Finnish",
  "French",
  "Frisian",
  "Galician",
  "Georgian",
  "German",
  "Greek",
  "Gujarati",
  "Haitian Creole",
  "Hausa",
  "Hawaiian",
  "Hebrew",
  "Hindi",
  "Hmong",
  "Hungarian",
  "Icelandic",
  "Igbo",
  "Indonesian",
  "Irish",
  "Italian",
  "Japanese",
  "Javanese",
  "Kannada",
  "Kazakh",
  "Khmer",
  "Kinyarwanda",
  "Korean",
  "Kurdish (Kurmanji)",
  "Kyrgyz",
  "Lao",
  "Latin",
  "Latvian",
  "Lithuanian",
  "Luxembourgish",
  "Macedonian",
  "Malagasy",
  "Malay",
  "Malayalam",
  "Maltese",
  "Maori",
  "Marathi",
  "Mongolian",
  "Nepali",
  "Norwegian",
  "Odia",
  "Pashto",
  "Persian",
  "Polish",
  "Portuguese",
  "Punjabi",
  "Romanian",
  "Russian",
  "Samoan",
  "Scots Gaelic",
  "Serbian",
  "Sesotho",
  "Shona",
  "Sindhi",
  "Sinhala",
  "Slovak",
  "Slovenian",
  "Somali",
  "Spanish",
  "Sundanese",
  "Swahili",
  "Swedish",
  "Tajik",
  "Tamil",
  "Tatar",
  "Telugu",
  "Thai",
  "Turkish",
  "Turkmen",
  "Ukrainian",
  "Urdu",
  "Uyghur",
  "Uzbek",
  "Vietnamese",
  "Welsh",
  "Xhosa",
  "Yiddish",
  "Yoruba",
  "Zulu",
];

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  // const [pass, setPass] = useState('');
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const trimmedEmail = email.trim();
    const trimmedLang = nativeLanguage.trim();

    if (!trimmedEmail || !trimmedLang) {
      setError("Please enter your email and select your native language.");
      return;
    }
    try {
      //Logueo anonimo
      const userCred = await signInAnonymously(auth);
      await setDoc(doc(db, "users", userCred.user.uid), {
        email: trimmedEmail,
        nativeLanguage: trimmedLang,
        createdAt: new Date(),
      });

      const userData = {
        uid: userCred.user.uid,
        email: trimmedEmail,
        nativeLanguage: trimmedLang,
      };

      console.log("✅ Login successful:", userData);

      onLogin(userData);
    } catch (err) {
      console.error("❌ Login error:", err.message);
      setError("Login failed. Please try again.");
    }
  };
  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2>Login Het Latin Lab</h2>
        <input
          type="email"
          placeholder="Email"
          className="quiz-input" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />
        <select
          className={`quiz-input ${
            nativeLanguage === "" && error ? "input-error" : ""
          }`}
          value={nativeLanguage}
          onChange={(e) => {
            setNativeLanguage(e.target.value);
            setError("");
          }}
        >
          <option value="" disabled hidden>
            Select your native language
          </option>
          {languages.map((lang, i) => (
            <option key={i} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <button className="quiz-button" onClick={handleLogin}>
          Sign In
        </button>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
