function GridContainer() {
  return (
    <div className="grid max-w-sm grid-cols-1 drop-shadow-lg xl:max-w-3xl xl:grid-cols-2">
      <div className="flex flex-col gap-5 rounded-t-lg bg-white  p-10 xl:col-span-2">
        <h2 className="text-2xl font-bold text-[hsl(179_62%_43%)]">
          Join our community
        </h2>
        <h3 className="text-lg text-[hsl(71,62%,48%)]">
          30-day, hassle-free money back guarantee
        </h3>
        <p className="mb-5 text-gray-500">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className="bg-[hsl(179_62%_43%)]  p-10 xl:rounded-bl-lg">
        <h2 className="mb-5 text-2xl font-bold text-white">
          Monthly Subscription
        </h2>
        <h3 className="text-lg text-[hsl(179,72%,55%)]">
          <span className="mr-2 text-4xl font-bold text-white">$29</span> per
          month
        </h3>
        <p className="mb-5 mt-3 text-white">
          {" "}
          Full access for less than $1 a day
        </p>
        <button className="w-full rounded-xl bg-[hsl(71_73%_54%)] p-5 text-lg font-bold text-white drop-shadow-lg transition-colors hover:bg-[hsl(71,60%,43%)]">
          Sign Up
        </button>
      </div>
      <div className="rounded-b-lg bg-[hsl(179,62%,46%)] p-10 xl:rounded-bl-none">
        <h2 className="mb-5 text-2xl font-bold text-white">Why Us</h2>
        <ul className="text-[hsl(204_43%_93%)]">
          <li>Tutorials by industry experts</li>
          <li>Peer &amp; expert code review</li>
          <li>Coding exercises</li>
          <li> Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </div>
  );
}
export default GridContainer;
