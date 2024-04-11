

import UploadForm from '../components/UploadForm';
import FileList from '../components/FileList';


export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Document Manager</h1>
      <UploadForm />
      <FileList/>
    </div>
  );
}
