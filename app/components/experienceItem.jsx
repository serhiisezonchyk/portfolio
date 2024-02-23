const ExperienceItem = ({ job }) => {
  return (
    <div className="flex flex-col p-2">
      {/*JOB TITLE*/}
      {job.link ? (
        <a href={job.link} target="_blank">
          <h3
            className={`rounded-b-2xl bg-white p-3 font-semibold ${
              job.isJob ? 'rounded-s-2xl' : 'rounded-e-2xl'
            } rounded-s-2xl border-t-2 border-red-200 italic underline`}
          >
            {job.title}
          </h3>
        </a>
      ) : (
        <h3
          className={`rounded-b-2xl bg-white p-3 font-semibold ${
            job.isJob ? 'rounded-s-2xl' : 'rounded-e-2xl'
          } border-t-2 border-red-200`}
        >
          {job.title}
        </h3>
      )}

      {/*JOB DESCRIPTION*/}
      <p className="ml-2 pt-2 text-sm tracking-wide" dangerouslySetInnerHTML={{ __html: job.description }}></p>
      {/*JOB DATE*/}
      <span className="ml-2 py-2 text-sm font-semibold italic text-red-400">{job.date}</span>
      {/*JOB NAME*/}
      <span
        className={`ml-2 rounded border-b-2 border-red-200 bg-white px-4 py-2 text-sm font-semibold ${
          job.isJob ? 'self-start' : 'self-end text-end'
        }`}
      >
        {job.name}
      </span>
    </div>
  );
};

export default ExperienceItem;
