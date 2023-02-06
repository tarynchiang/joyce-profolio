import { Component, createRef, RefObject } from "react";
import Project from "../Project/Project";
import styles from "./Home.module.scss";
import data from "../../data/projects.json";

type HomeState = {
  projects: Array<{ icon: string; name: string; type: string }>;
};

export default class Home extends Component<{}, HomeState> {
  private ref: RefObject<HTMLDivElement> = createRef();

  constructor(props: any) {
    super(props);
    this.state = {
      projects: data,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.ref.current?.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    this.ref.current?.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const element = this.ref?.current;
    const scrollTop = element?.scrollTop ? Math.ceil(element.scrollTop) : 0;
    const scrollHeight = element?.scrollHeight ? element.scrollHeight : 0;
    const clientHeight = element?.clientHeight ? element.clientHeight : 0;

    if (scrollTop + clientHeight + 10 >= scrollHeight) {
      this.addProjects();
    }
  }

  addProjects() {
    let projects = [...this.state.projects];

    projects = projects.concat([...data]);
    this.setState({
      projects,
    });
  }

  render() {
    return (
      <div className={styles["home-container"]} ref={this.ref}>
        {this.state.projects.map((project, i) => (
          <div
            className={`${styles.project} ${
              i === 0 ? styles["add-padding-left"] : ""
            }`}
          >
            <Project
              key={i}
              icon={project.icon}
              name={project.name}
              type={project.type}
            />
          </div>
        ))}
      </div>
    );
  }
}
