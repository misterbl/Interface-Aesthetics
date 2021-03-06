import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import ROUTES from "../const/routes";
import { uploadCourseImage, getCourseImage } from "../apiThunk";
import { UploadScreen } from "../components/UploadScreen";
import { signIn } from "../../functions/firebase-auth";
import BluePhotoContainer from "../components/BluePhotoContainer";
import TitleWithMark from "../components/TitleWithMark";
import SignInForm from "../components/SignInForm";
import BlogAdmin from "../components/BlogAdmin";
import CoursesAdmin from "../components/CoursesAdmin";
import contact from "../assets/contact.png";

export class Admin extends React.Component {
  state = {
    courses: [],
    auth: { user: { uid: null } },
    showCourseAdmin: true,
    showBlogAdmin: false,
    blog: []
  };

  // updateBlog = courses => {
  //   updateCourses(courses);
  //   console.log("update");
  // };

  handleSignIn = async (email, password) => {
    const auth = await signIn(email, password);
    this.setState({ auth });
  };

  showCourse = () => {
    this.setState({ showCourseAdmin: true, showBlogAdmin: false });
  };

  showBlog = () => {
    this.setState({ showBlogAdmin: true, showCourseAdmin: false });
  };

  renderPage = () => {
    const { courses, blog, auth, showCourseAdmin, showBlogAdmin } = this.state;
    if (auth.user.uid) {
      return (
        <React.Fragment>
          <nav className="nav nav-pills flex-column flex-sm-row">
            <button
              className={`flex-sm-fill text-sm-center nav-link ${
                showCourseAdmin ? "active" : "bg-secondary"
              }`}
              onClick={this.showCourse}
            >
              Courses
            </button>
            {/* <button
              className={`flex-sm-fill text-sm-center nav-link ${
                showBlogAdmin ? "active" : "bg-secondary"
              }`}
              onClick={this.showBlog}
            >
              Blog
            </button> */}
          </nav>
          {showCourseAdmin && (
            <CoursesAdmin updateCourses={this.updateCourses} />
          )}
          {showBlogAdmin && <BlogAdmin />}
        </React.Fragment>
      );
    }
    return <SignInForm signIn={this.handleSignIn} />;
  };
  render() {
    return (
      <main className="admin-page p-60">
        <header>
          <div className="text-center">
            <h2>ADMIN DASHBOARD</h2>
          </div>
          <img
            src={contact}
            className="d-block w-100"
            alt="contact interface aesthetics"
          />
        </header>
        <br />
        {this.renderPage()}
      </main>
    );
  }
}

export default withRouter(Admin);
