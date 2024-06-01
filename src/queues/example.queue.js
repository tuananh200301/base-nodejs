import fastq from 'fastq'

async function worker() {
    // Code here
}

const exampleQueue = fastq.promise(worker, 1)

export default exampleQueue
