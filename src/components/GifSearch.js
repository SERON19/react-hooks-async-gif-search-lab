const GifSearch = () => {
    return ( 
    <div className=" search">
        Enter a Search Term:
            <form className="form-inline justify-content-center m-2">
                
                <input type="text" name="search" placeholder="Search" />
                <button type="submit" className="btn btn-primary" >
                    Find Gifs
                </button>
            </form>
    </div>
        
     );
}
 
export default GifSearch;