export default function MovieSearch() {
  return (
    <form className="form">
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e Jurassic Parl"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}