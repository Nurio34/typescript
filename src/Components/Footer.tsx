import { useLocation, useNavigate } from "react-router-dom";

const projects = [
    {
        id: 1,
        path: "",
        name: "HomePage",
    },
    {
        id: 2,
        path: "todo",
        name: "TodoApp",
    },
];

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <footer>
            <ul className=" grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] py-2 px-4 gap-1">
                {projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <button
                                type="button"
                                className={` underline underline-offset-2
                                    ${
                                        location.pathname ===
                                        "/typescript-basics/" + project.path
                                            ? "font-semibold text-orange-500"
                                            : " font-medium text-purple-600"
                                    }
                                `}
                                onClick={() => {
                                    navigate(
                                        `/typescript-basics/${project.path}`,
                                    );
                                }}
                            >
                                {project.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
}

export default Footer;
