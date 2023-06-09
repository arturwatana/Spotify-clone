import LoginForm from "../components/Login/LoginForm/LoginForm";
import LoginNavBar from "../components/Login/LoginNavBar/NavBar";

export default function Login() {
  return (
    <div className="bg-primary h-auto">
      <LoginNavBar />
      <LoginForm />
    </div>
  );
}
