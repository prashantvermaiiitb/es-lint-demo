const hello = "12342";

/**
 * Sample function defined for the purpose of showing the non-usage error
 * indicated by the es-lint
 */
function hello2() {
  const bye = "bye";

  /**
   * For disable the es-lint on the line
   * Please put the below comment
   * now instead of the error we will have the warning for below 2
   */
  // eslint-disable-next-line

  console.log("this is sample ", bye);

  /**
   * disabling a particular rule for the eslint
   */
  // eslint-disable-next-line quotes

  console.log("this is sample ", 2323232);
}

hello();
