import React from 'react';

const ExperienceItem = ({ job }) => {
  return (
    <div className='flex flex-col p-2'>
      {/*JOB TITLE*/}
      {job.link ? (
        <a href={job.link} target='_blank'>
          <h3 className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg underline italic'>
            {job.title}
          </h3>
        </a>
      ) : (
        <h3 className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
          {job.title}
        </h3>
      )}

      {/*JOB DESCRIPTION*/}
      <p className='p-3 text-sm '>{job.description}</p>
      {/*JOB DATE*/}
      <span className='p-3 text-red-400 text-sm font-semibold italic'>{job.date}</span>
      {/*JOB NAME*/}
      <span
        className={`p-1 rounded bg-white text-sm font-semibold w-fit ${
          job.isJob ? 'self-start' : 'self-end'
        }`}
      >
        {job.name}
      </span>
    </div>
  );
};

export default ExperienceItem;
