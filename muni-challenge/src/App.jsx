import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Router } from "@/Router";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 1000,
          closeButton: true,
        }}
      />
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
