export const typeonebyone = (inputKey, value) => {
    [...value].forEach((c) => {
      cy.get(inputKey).type(c);
  });
};


