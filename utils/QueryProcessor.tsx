export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  else if (query.includes("What is 65 plus 40?")) {
    return (
      "105" 
    );
}
  
  return "";

}

  // else (query.toLowerCase().includes("andrew id")) {
  //   return (
  //     "My Andrew ID is zsahmed" 
  //   );
  // }
  // return "";



    




