import { useNavigate } from "react-router-dom";

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

    return (
        <footer>
            <ul>
                {projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <button
                                type="button"
                                onClick={() => {
                                    navigate(`/${project.path}`);
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
