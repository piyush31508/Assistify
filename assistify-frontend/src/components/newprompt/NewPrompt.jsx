import AttachFileIcon from '@mui/icons-material/AttachFile';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const NewPrompt = () => {
    return (
        <div className="newForm flex justify-center h-full">
            <form className="newForm w-full bg-[#2c2937] p-3 absolute left-1/2 transform -translate-x-1/2 flex items-center gap-3 rounded-lg">
                {/* File upload label */}
                <label htmlFor="file" className="file-label flex items-center justify-center cursor-pointer rounded-full bg-[#605e68] p-2">
                    <AttachFileIcon style={{ color: '#ccc' }} />
                </label>
                <input type="file" id="file" hidden />

                {/* Text input */}
                <input 
                    type="text" 
                    placeholder="Ask Anything..." 
                    className="text-input flex-1 p-2 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    style={{ height: '40px' }}
                />

                {/* Submit button */}
                <button type="submit" className="submit-button flex items-center justify-center rounded-full bg-[#605e68] p-2 cursor-pointer">
                    <ArrowUpwardIcon style={{ color: '#fff' }} />
                </button>
            </form>
        </div>
    );
}

export default NewPrompt;
