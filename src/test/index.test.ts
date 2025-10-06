import { verifierLettre } from "../index";

describe("Vérifier la casse d'une lette", () => {
  test("Un texte n'est pas un caractère valide", () => {
    expect(verifierLettre("AA")).toEqual("invalide");
  });

  test("Une chaine vide n'est pas un caractère valide", () => {
    expect(verifierLettre("")).toEqual("invalide");
  });

  test("Un nombre n'est pas un caractère valide", () => {
    expect(verifierLettre("3")).toEqual("invalide");
  });

  test("A est une majuscule", () => {
    expect(verifierLettre("A")).toEqual("majuscule");
  });

  test("a est une minuscule", () => {
    expect(verifierLettre("a")).toEqual("minuscule");
  });

  test("L est une majuscule", () => {
    expect(verifierLettre("L")).toEqual("majuscule");
  });

  test("l est une minuscule", () => {
    expect(verifierLettre("l")).toEqual("minuscule");
  });

  test("L est une majuscule", () => {
    expect(verifierLettre("L")).toEqual("majuscule");
  });

  test("l est une minuscule", () => {
    expect(verifierLettre("l")).toEqual("minuscule");
  });

  test("Z est une majuscule", () => {
    expect(verifierLettre("Z")).toEqual("majuscule");
  });

  test("z est une minuscule", () => {
    expect(verifierLettre("z")).toEqual("minuscule");
  });
});
