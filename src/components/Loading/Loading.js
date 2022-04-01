function Loading()  {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return loading ? <div className="loading">Loading...</div> : null;
    // return (
    //     <div className="loading_container">

    //     </div>
    // )
}

export default Loading;