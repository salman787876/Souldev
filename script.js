function generateOrderID() {
  return "PRIME-" + Date.now().toString().slice(-6);
}
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

async function createOrder(name, service) {
  const orderId = generateOrderID();

  await addDoc(collection(db, "orders"), {
    name: name,
    service: service,
    orderId: orderId,
    status: "pending"
  });

  alert("رقم طلبك: " + orderId);
}
