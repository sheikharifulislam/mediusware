import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import AppContextProvider from "./Context/AppContext.jsx";
import Index from "./components/Index.jsx";
import Menu from "./components/Menu.jsx";
import ModalA from "./components/ModalA.jsx";
import ModalB from "./components/ModalB.jsx";
import Problem1 from "./components/Problem-1.jsx";
import Problem2 from "./components/Problem-2.jsx";

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppContextProvider>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/" element={<Menu />}>
                            <Route path="problem-1" element={<Problem1 />} />
                            <Route path="problem-2" element={<Problem2 />} />
                        </Route>
                        <Route path="modal-a" element={<ModalA />} />
                        <Route path="modal-b" element={<ModalB />} />
                    </Routes>
                </AppContextProvider>
            </QueryClientProvider>
        </>
    );
}
export default App;
