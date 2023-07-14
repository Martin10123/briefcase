import { useNavigate } from "react-router-dom";

export const useReturnPage = () => {
    const navigate = useNavigate();

    const onReturnPage = () => {
        navigate("/");
    };

    return {
        onReturnPage,
    };
};
