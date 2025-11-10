import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../store/store";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const authUser = useSelector(
        (state: RootState) => state.auth.session?.user
    );

    if (!authUser) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
