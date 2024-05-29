import React, { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { getExpDuration } from "../util/auth";

const Main = () => {
  const submit = useSubmit();
  const token = useLoaderData();
  const { state } = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "TOKEN EXP") {
      submit(null, { action: "/logout", method: "POST" });
    }

    const duration = getExpDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, [duration]);
  }, [token, submit]);

  return (
    <section className="main">
      <Navbar />
      {state === "loading" ? (
        <div className="loaderLocation">
          <span class="loader"></span>
        </div>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default Main;
