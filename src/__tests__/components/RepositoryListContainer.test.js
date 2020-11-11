import React from "react";
import { fireEvent, render, act, waitFor } from "@testing-library/react-native";
import RepositoryListContainer from "../../components/RepositoryListContainer";
import SignInContainer from "../../components/SignInContainer";

describe("repositorylist", () => {
  describe("repositorylistcontainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        pageinfo: {
          totalcount: 8,
          hasnextpage: true,
          endcursor:
            "wyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      // Add your test code here
      const { debug, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      getAllByTestId("repoName").map((e, i) => {
        expect(e).toHaveTextContent(repositories.edges[i].node.fullName);
      });
      getAllByTestId("description").map((e, i) => {
        expect(e).toHaveTextContent(repositories.edges[i].node.description);
      });
      getAllByTestId("language").map((e, i) => {
        expect(e).toHaveTextContent(repositories.edges[i].node.language);
      });
      getAllByTestId("forkCount").map((e, i) => {
        const count = repositories.edges[i].node.forksCount;
        const expected = count > 1000 ? (count / 1000).toFixed(1) : count;
        expect(e).toHaveTextContent(RegExp(`${expected}*`));
      });
      getAllByTestId("stargazerCount").map((e, i) => {
        const count = repositories.edges[i].node.stargazersCount;
        const expected = count > 1000 ? (count / 1000).toFixed(1) : count;
        expect(e).toHaveTextContent(RegExp(`${expected}*`));
      });
      getAllByTestId("ratingAverage").map((e, i) => {
        expect(e).toHaveTextContent(repositories.edges[i].node.ratingAverage);
      });
      getAllByTestId("reviewCount").map((e, i) => {
        const count = repositories.edges[i].node.reviewCount;
        const expected = count > 1000 ? (count / 1000).toFixed(1) : count;
        expect(e).toHaveTextContent(RegExp(`${expected}*`));
      });
    });
  });
});

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const [username, password] = ["username", "password"];
      const onSubmit = jest.fn();
      const { debug, getByTestId } = render(
        <SignInContainer onSubmit={onSubmit} />
      );

      await act(async () => {
        fireEvent.changeText(getByTestId("username"), username);
        fireEvent.changeText(getByTestId("password"), password);
        fireEvent.press(getByTestId("submit"));
      });

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username,
          password,
        });
      });
    });
  });
});
