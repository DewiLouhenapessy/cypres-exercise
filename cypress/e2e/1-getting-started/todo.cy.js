/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://qaplayground.dev/apps/tags-input-box/");
  });

  it("should display input area with two li items", () => {
    cy.get("li").should("have.length", 2);
    cy.get(".details p span").should("contain.text", 8);

    cy.get("input").type("hello{enter}");
    cy.get("li").should("have.length", 3);
    cy.get(".details p span").should("contain.text", 7);
  });

  it("should remove the item when we click on X icon", () => {
    cy.get("li").contains("node").find("i").click();
    cy.get("li").contains("node").should("not.exist");
  });

  it("should remove all tags", () => {
    cy.get("button").click();
    cy.get("ul").children().should("have.length", 1);
    cy.get(".details p span").should("contain.text", 10);
  });

  it("should be able to able to add single character test", () => {
    cy.get("input").type("a{enter}");
    cy.get("li").should("have.length", 3);
  });
});
