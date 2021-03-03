import PropTypes from 'prop-types'

const header = ( { spaceName,  } ) => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center pt-5">
                <div className="text-center font-bold text-xl">
                Workspaces
                </div></div>
                <div className="rounded, focus:ring-blue-700 transition hover:border-blue-700,">
                </div>
                <div className="rounded focus:ring-blue-700  transition hover:border-blue-700">
                <button className="border hover:bg-blue-500 bg-blue-100 border-blue-400 text-blue-400 transition rounded hover:text-blue font-bold p-2"> Edit Workspaces </button> 
                </div>
        </div>			
    )
}



export default header
