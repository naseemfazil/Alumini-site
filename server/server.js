
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const async = require('async');

const muserdemo = require('./muserdemo');
const mplacement = require('./mplacement');
const mcurrent = require('./mcurrent');
const mpassedout = require('./mpassedout');
const mregister = require('./mregister')
const mlogin = require('./mlogin');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/demoDB", { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.log("DB not connected...")
        console.log(err)
    } else {
        console.log("DB connected...")
    }
});

app.listen(3001, () => {
    console.log("Server started at 3001");
});

app.get('/', function (req, res) {
    console.log("api hit")
    res.status(200).send({ "hello": "from server" });
});

app.get('/saveUser', function (req, res) {

    let reqUserData = {
        "name": "hello2",
        "email": "hello2@gmail.com"
    }

    // let newUserDemo = new muserdemo(req.body);
    let newUserDemo = new muserdemo(reqUserData);
    newUserDemo.save(function (saveErr, saveDocs) {
        if (saveErr) {
            console.log("error")
            console.log(saveErr)
            res.status(500).send({ "save": "failed" });
        } else {
            console.log("save succ")
            console.log(saveDocs);
            res.status(200).send({ "save": "success" });
        }
    });
});
//placement ApI
app.post('/savePlacement', function (req, res) {
    console.log(req.body);

    let newPlacement = new mplacement(req.body);

    newPlacement.save(function (saveErr, saveDocs) {
        if (saveErr) {
            res.status(500).send({ "code": "fail" });
        } else {
            console.log(saveDocs)
            res.status(200).send({ "code": "succ" });
        }
    });
})
//current student ApI
app.post('/saveCurrent', function (req, res) {
    console.log(req.body);

    let newCurrent = new mcurrent(req.body);

    newCurrent.save(function (saveErr, saveDocs) {
        if (saveErr) {
            res.status(500).send({ "code": "fail" });
            console.log(saveErr)
        }
        else {
            console.log(saveDocs)
            res.status(200).send({ "code": "sucess" });
        };
    })
})

// passedout student ApI
app.post('/savePassedout', function (req, res) {
    console.log(req.body);
    let newPassedout = new mpassedout(req.body);
    newPassedout.save(function (saveErr, saveDocs) {
        if (saveErr) {
            res.status(500).send({ "code": "fail" });
            console.log(saveErr)
        }
        else {
            console.log(saveDocs)
            res.status(200).send({ "code": "sucess" });
        }
    })
})
//dashboard api
app.get('/getDashboard', function (req, res) {
    console.log("in api")
    let dashResponse = {};
    async.series({
        getPassedoutCount: callback => {
            mpassedout.find({}, (err, docs) => {
                if (err) {
                    callback(err);
                } else {
                    dashResponse.passedOutCount = docs.length
                    callback();
                }
            });
        },
        getCurrentStudentCount: callback => {
            mcurrent.find({}, (err, docs) => {
                if (err) {
                    callback(err);
                } else {
                    dashResponse.currentStudCount = docs.length;
                    dashResponse.totalStud = dashResponse.passedOutCount + dashResponse.currentStudCount
                    callback();
                }
            })
        },
        getRequiredSkills: callback => {
            mplacement.find({}, { Requiredskills: 1 }, (err, docs) => {
                if (err) {
                    callback(err);
                } else {
                    dashResponse.reqSkills = docs.reverse();
                    callback();
                }
            })
        },
        getCurrentStudentTech: callback => {
            
            mcurrent.find({}, { Areaofintrest: 1 }, (err, docs) => {
                if (err) {
                    callback(err);
                } else {
                    dashResponse.currentStudInterest = docs.reverse();
                    callback();
                }
            })
        },
    }, err => {
        console.log(err);
        if (err) {
            res.status(500).json({ err });
        } else {
            res.json({ docs: dashResponse });
        }

    });
})

// register ApI
app.post('/saveRegister', function (req, res) {
    console.log(req.body);
    let newRegister = new mregister(req.body)
    newRegister.save(function (saveErr, saveDocs) {
        if (saveErr) {
            res.status(500).send({ "code": "fail" });
            console.log(saveErr)
        }
        else {
            console.log(saveDocs)
            res.status(200).send({ "code": "sucess" });
        }
    })
})

// login ApI
app.post('/saveLogin', function (req, res) {
    console.log(req.body);
    console.log("save login api called")
    let newLogin = new mlogin(req.body)
    newLogin.save(function (saveErr, saveDocs) {
        if (saveErr) {
            res.status(500).send({ "code": "fail" });
            console.log(saveErr)
        }
        else {
            console.log(saveDocs)
            res.status(200).send({ "code": "sucess" });
        }
    })
})
// login validation api 
app.post('/checkLogin', function (req, res) {

    /**
     * req.body.email, passsword
     * database emal paas, irunthuccchuna _id client ku send panuvom
     * suppose database email     pass   ilana useeeeeeeer not foundddddd
     */


     if(req.body.Status== "Student"){

     }
    console.log("check login...")
    console.log(req.body)
    mregister.find({ Email: req.body.Email, Password: req.body.Password }, { _id: 1 }, function (err, docs) {
        console.log("login check docs")
        console.log(docs)
        if (err) {
            //db error
        } else if (docs && docs.length > 0) { // user irunthhhhhhhhhhhhha
            res.status(200).send({ userId: docs[0]._id })
        } else if (docs && docs.length == 0) { //   user ilana
            res.status(200).send({ userId: "" });
        }
    })
});

app.get('/getAllUser', function (req, res) {
    muserdemo.find({}, {}, function (err, docs) {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } else {
            console.log(docs)
            res.status(200).send(docs)
        }
    })
});

// get api placement
app.get('/getPlacement', function (req, res) {
    console.log("in placement api...")
    mplacement.find({}, {}, function (err, docs) {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        else {
            console.log(docs)
            res.status(200).send(docs)
        }
    })
})
// get api login
app.get('/getLogin', function (req, res) {
    console.log("in login api..")
    mlogin.find({}, {}, function (err, docs) {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        else {
            console.log(docs)
            res.status(200).send(docs)
        }
    })
})
//get api placement
app.get('/getPlacement', function (req, res) {
    console.log('in placement api...')
    mplacement.find({}, {}, function (err, docs) {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        else {
            console.log(docs)
            res.status(200).send(docs)
        }
    })
})
//get api current student
app.get('/getCurrent', function (req, res) {
    console.log("in current student api..")
    mcurrent.find({}, {}, function (err, docs) {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        else {
            console.log(docs)
            res.status(200).send(docs)
        }
    })
})
//get api Passed out student
app.get('/getPasseout', function (req, res) {
    console.log("in passed out student api..")
    mpassedout.find({}, {}, function (err, docs) {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        else {
            console.log(docs)
            res.status(200).send(docs)
        }
    })
})
app.post('/getCurrentStudentinfo', function (req, res) {
    console.log("in current student information..")
    mcurrent.findOne({ 'Email':req.body.Email }, function (err, docs) {
        if (err) {
            console.log(err)
            res.status(500).send(err)
            res.status(500).send(err)
        }
        else {
            console.log(docs)
            res.status(200).send(docs)
        }

    })

})
app.post('/getPassStudentinfo', function (req, res) {
    console.log("in passedout student information..")
    mcurrent.findOne({
        'Email': req.body.Email
    }, function (err, docs) {
        if (err) {
            console.log(err)
            res.status(500).send(err)
            res.status(500).send(err)
        } else {
            console.log("passed.....")
            console.log(docs)
            res.status(200).send(docs)
        }

    })

})