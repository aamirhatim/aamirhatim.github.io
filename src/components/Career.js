import React, { useEffect } from 'react';
import '../css/career.scss';

import JobsData from '../lib/jobs/jobs.json';

function getJobDurationString(start, end) {
    var duration;
    var endString;
    duration = start.month + ' ' + start.year;

    if ( end.month != null ) {
        endString = ' - ' + end.month + ' ' + end.year;
        duration = duration.concat([endString]);
    } else {
        endString = ' - Now';
        duration = duration.concat([endString]);
    }

    return duration;
}

function createJobTile(job) {
    // Get div to insert tiles into
    var timeline = document.getElementById('timeline');

    // Get templates
    var jobTemplate = document.getElementById('job-template-2');
    var jobItem = jobTemplate.querySelector('.job', true);
    var jobElement = document.importNode(jobItem, true);

    // Populate with job info
    jobElement.querySelector('.job-time').innerText = getJobDurationString(job.startDate, job.endDate);
    jobElement.querySelector('.job-role').innerText = job.role;
    jobElement.querySelector('.job-company').innerText = '@ ' + job.company;
    jobElement.querySelector('.job-location').innerText = job.location;
    jobElement.querySelector('.job-description').innerText = job.description;

    // Add to DOM
    timeline.appendChild(jobElement);
}

export default function Career() {
    useEffect( () => {
        // Clear out career section before populating
        document.getElementById('timeline').innerHTML = null;

        // Iterate through job entires
        for ( var job in JobsData ) {
            createJobTile(JobsData[job]);
        }
    });

    return(
        <div id='career' className='body-section'>
            <div>
                <div id='about-me'>
                    <h2>My Path</h2>
                    <p>I've come a lng way from way back when I usedto pick oranges from rotting bunnay branches in dire straights of Mo Town.</p>
                </div>
                <div id='timeline'></div>
            </div>

            <template id='job-template-2'>
                <div className='job'>
                    <div className='job-img'></div>
                    <div className='job-info'>
                        <h4 className='job-role'></h4>
                        <h3 className='job-company'></h3>
                        <h5 className='job-time'></h5>
                        <h5 className='job-location'></h5>
                        <p className='job-description'></p>
                    </div>
                </div>
            </template>
        </div>
    )
};