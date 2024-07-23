
export const tocStyle = {
    panel:{
        padding:'0px 0px',
        width:"300px",
        height:'100vh',
        boxShadow:'1px 0px 5px 1px #d9d9d9',
        borderRadius:'0px 0px 0px 0px',
    } as React.CSSProperties,
    profileBadge:{
        width:'100%',
        height:'100px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#00A3FF',
        borderRadius:'0px 0px 0px 0px',
        padding:'0px 5px',
    } as React.CSSProperties,
    avatar:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white', 
        width: 50, 
        height: 50,
        boxShadow:'0px 0px 3px 1px white',
        borderRadius: '50%',

    } as React.CSSProperties,
    fileAction:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'40px',
        borderRadius:'5px',
        marginTop:1,
        padding:'0px 5px'
    } as React.CSSProperties,
    folderStyle:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        boxShadow:'0px 1px 0px 1px #d9d9d9'
    } as React.CSSProperties,
    dropDownShow:{
        width:'90%',
        height:'100px',
        border:'1px solid black',
        marginLeft:'25px',
        transition: 'height 0.4s ease-in-out'
    } as React.CSSProperties,
} 