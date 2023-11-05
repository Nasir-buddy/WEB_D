// express js
install 
----express js boilerplate code ✅----
        go to npm 
        search express 
        copy the code      
go to npm 
search express
copy the code 
----express js ejs setup ✅----
        install ejs 
        set view engine 
        create ejs files 
        render ejs files inside route 
express static files setup 
architecture of public folder

---now new ---
----express generator ✅----
    hum logo ko kaafi sara kam karna padta hai express setup krne me iska matlab 
    har baar jb hm naya project bnaynge to har baar fir se utna hi kaam krna prega matlab 
    ki poora code likho  and sab kuch setup karo is time ko bacha sakte ho with help of the express generator,
    use express generator and it will make the folder structure for you and it will also write the basic code 
    for the project.
    // express generator ek folder bana ke deta hai jiska matlab aapko khudse folder nahi banana hai, to 
    express gen saare files ko is folder main daal ke dega 

----steps to use express generator ✅----
    sabse pehle jeevan me ek bar laptop pe install krna hai  by -g se 
    npm i express-generator -g
    to create new aap any where 
    // create new ap 
    // express <appname> --view=ejs

    // now use 3 cmd 
    cd appname 
    npm i
    open it on vs code 

---- Mongo DB database ✅ ----
har natye app ka data store hoga staroga main , par use directly rakhe ki jagah ek container 
main rakhenge , us container main sird us app ka data aayga

    models(code) => collection(db)
    schema(code) => document(db) 
    // ek app ka poora data => database
    // ek app main variety of data hota hai par poora data hota app ka hi hai, par us data ka sub category kehlataa hai collection 
    // collection matlab ki bola users ka data , ek user pe bat kri to hua document.

 ----installation part---- ✅
    instal mongodb 
    install mongooseejs
    require and setup connection
    make schema 
    create mode and export
    shcema matlab aapko ye btana banne wala har document ka kya kya properties hoga  
    KDABItwHzizwFT41
// dbs, models, schema , collections, documents


----The end game part 2----
intermediate mognodb (not in this video)
    How can I perform a case insensitive search in MOngoose?
    How do I find documents where an array field contains all of a set of value?
    How can I search for documents with a specific date range in Mongoose?
    How can I filter documents based on the existence of a field's in Mongoose ? 


----The end game part 1---- ✅ 
  session and cookies
    understanding sessions 
    creating sessions, using sessions across routes and destroying sessions 
    understanding cookies
    creating cookies, using cookies accross routes and destroying cookies 

    // uses 
    create 
    req.session.kuchbhi = koibhivalue;

    read 
    req.session.kuchbhi 

    delete
    req.sessionl.destroy

    // cookie setup 
    res.cookie("name", value);

    cookie reading
    req.cookies.name
    
    cookie delete
    res.clearCookie("name");

----NEXT VIDEO ON -----
--End Game part 2 --
    flash messages 
    intermediate mongodb 
        How can I perform a case insensitive search in MOngoose?
        How do I find documents where an array field contains all of a set of value?
        How can I search for documents with a specific date range in Mongoose?
        How can I filter documents based on the existence of a field's in Mongoose ? 
    Authentication and authorization
    choosing out project:
        pinterest 
        youtube music 
        instagram 
        google photos 
        flipkart 
        switched to second application