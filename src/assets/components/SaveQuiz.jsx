import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const saveQuizResult = async (resultData) => {
  const { email, nativeLanguage, uid } = resultData;

  if (!email || !nativeLanguage || !uid) {
    console.error("❌ Datos incompletos:", resultData);
    return;
  }
  try {
    await addDoc(collection(db, "quizResults"), {
      ...resultData,
      createdAt: serverTimestamp(),
    });
    console.log("Result saved in Firestore");
  } catch (err) {
    console.error("Error saving result:", err);
  }
};

export default saveQuizResult;
