function s3Connection(){
    var AWS = require('aws-sdk');
    var ep = new AWS.Endpoint("http://155.210.13.105:7480");
    AWS.config.update({
        region: 'us-west-2',
        credentials: new AWS.Credentials("69RY1JSB5DQLTWXV2TT9","575Mp0DbjzXbZ8AKaswxu9KytL4uqX9S6GDBF9PW"),
        sslEnabled: false,
        endpoint: ep
    });

    // Create S3 service object
    var s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        region: 'eu-west-1',
        sslEnable: false});
    return s3
    }

function UploadFile(s3, file, key) {
    var uploadParams = {Bucket: "Public", Key: key, Body: "", ACL: "public-read"};
    var fs = require('fs');
    var fileStream = fs.createReadStream(file);
    fileStream.on('error', function(err) {
        console.log('File Error', err);
    })
    uploadParams.Body = fileStream;

// call S3 to retrieve upload file to specified bucket
    s3.upload (uploadParams, function (err, data) {
        if (err) {
            console.log("Error", err);
            return false
        } if (data) {
            console.log("Upload Success", data.Location);
            return true
        }
    });

};
function DeleteFile(s3, key){
    var params = {
        Bucket: "Public",
        Key: key
    };
    s3.deleteObject(params, function(err, data) {
        if (err){
            console.log(err, err.stack); // an error occurred
            return false
        }
        else{
            console.log("Deleted", data);
            return true
        }                // successful response
        /*
        data = {
        }
        */
    });
}
function ListsBuckets(s3){
    s3.listBuckets(function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Bucket List", data.Buckets);
        }
    });
}
