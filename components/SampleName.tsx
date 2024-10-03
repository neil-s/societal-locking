import { useState, useEffect } from 'react';

export default function SampleName() {
  const [sampleName, setSampleName] = useState('Loading...');

  useEffect(() => {
    async function fetchSampleName() {
      try {
        const response = await fetch('/api/sample');
        const data = await response.json();
        setSampleName(data.name);
      } catch (error) {
        console.error('Error fetching sample name:', error);
        setSampleName('Error loading sample');
      }
    }

    fetchSampleName();
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Sample Name from Database:</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300">{sampleName}</p>
    </div>
  );
}
