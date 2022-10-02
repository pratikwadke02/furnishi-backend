const db = require("../../models");
const Enquiry = db.enquiry;

// exports.create = async (req, res) => {
//     try{
//         var enquiryCode;
//         // check if first enquiry
//         await Enquiry.findAll().then(data => {
//             if(data.length == 0){
//                 // first enquiry
//                 enquiryCode = 'E100500';
//                 console.log(enquiryCode);
//             }else{
//                 // not first enquiry
//                 // get last enquiry code
//                 var lastEnquiryCode = data[data.length - 1].enquiryCode;
//                 // get last 3 digits
//                 var lastDigits = lastEnquiryCode.substring(1, 7);
//                 // increment by 1
//                 var incrementedDigits = parseInt(lastDigits, 10) + 1;
//                 // generate code as E100500
//                 enquiryCode = 'E' + incrementedDigits;
//             }
//         });
//         console.log(enquiryCode);
//                     // enquiry code does not exist
//        // create enquiry
//        await Enquiry.create({
//             enquiryCode: enquiryCode,
//             clientName: req.body.clientName,
//             clientCode: req.body.clientCode,
//             clientProductCode: req.body.clientProductCode,
//             serviceType: req.body.serviceType,
//             faceArea: req.body.faceArea,
//             floatingShelf: req.body.floatingShelf,
//             spotLight: req.body.spotLight,
//             stripLight: req.body.stripLight,
//             expectedStartDate: req.body.expectedStartDate,
//             expectedEndDate: req.body.expectedEndDate,
//             startTime: req.body.startTime,
//             endTime: req.body.endTime,
//             breakStartTime: req.body.breakStartTime,
//             breakEndTime: req.body.breakEndTime,
//             siteCondition: req.body.siteCondition,
//             productType: req.body.productType,
//             workPhase: req.body.workPhase,
//             workPhaseDetails: req.body.workPhaseDetails,
//             locality: req.body.locality,
//             pincode: req.body.pincode,
//             quote: req.body.quote,
//             status: req.body.status,
//     }).then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the Enquiry."
//         });
//     });
//     }catch(err){
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the Enquiry."
//         });
//     }
// };

exports.create = async (req, res) => {
    try{
        var orderId;
        // check if first enquiry
        await Enquiry.findAll().then(data => {
            if(data.length == 0){
                // first enquiry
                orderId = 'E100500';
                console.log(enquiryCode);
            }else{
                // not first enquiry
                // get last enquiry code
                var lastEnquiryCode = data[data.length - 1].enquiryCode;
                // get last 3 digits
                var lastDigits = lastEnquiryCode.substring(1, 7);
                // increment by 1
                var incrementedDigits = parseInt(lastDigits, 10) + 1;
                // generate code as E100500
                orderId = 'O' + incrementedDigits;
            }
        });
        console.log(orderId);
                    // enquiry code does not exist
       // create enquiry
       await Enquiry.create({
            orderId: orderId,
            name: req.body.name,
            number: req.body.number,
            address: req.body.address,
            pincode: req.body.pincode,
            locationCode: req.body.locationCode,
            customerCordinator: req.body.customerCordinator,
            customerCordinatorNumber: req.body.customerCordinatorNumber,
            sourceCordinator: req.body.sourceCordinator,
            sourceCordinatorNumber: req.body.sourceCordinatorNumber,
            factoryCordinator: req.body.factoryCordinator,
            factoryCordinatorNumber: req.body.factoryCordinatorNumber,
            productId: req.body.productId,
            productCode: req.body.productCode,
            saleValue: req.body.saleValue,
            materialValue: req.body.materialValue,
            faceArea: req.body.faceArea,
            targetStartDate: req.body.targetStartDate,
            targetEndDate: req.body.targetEndDate,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            totalService: req.body.totalService,
            serviceDone: req.body.serviceDone,
            servicePending: req.body.servicePending,
            serviceCalendar: req.body.serviceCalendar,
            estimatedCost: req.body.estimatedCost,
            actualCost: req.body.actualCost,
            attachment: req.body.attachment,
            totalHistory: req.body.totalHistory,
            totalExpenseTillDate: req.body.totalExpenseTillDate,
            statusAction: req.body.statusAction,
            estimatedQuote: req.body.estimatedQuote,
            actualQuote: req.body.actualQuote,
            discount: req.body.discount,
            estimatedQuoteAfterDiscount: req.body.estimatedQuoteAfterDiscount,
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Enquiry."
        });
    });
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Enquiry."
        });
    }
};


exports.fmEnquiry = async(req, res) => {
    try{
        await Enquiry.findAll().then(data => {
            res.send(data);
        });
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving enquiries."
        });
    }
}

exports.spEnquiry = async(req, res) => {
    try{
        const data = await Enquiry.findAll();
        const spEnquiry = data.map(enquiry => {
            return {
                id: enquiry.id,
                pincode: enquiry.pincode,
                product: enquiry.product,
                faceArea: enquiry.faceArea,
                attachment: enquiry.attachment,
            }
        });
        res.status(200).send(spEnquiry);
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving enquiries."
        });
    }
}

exports.wpEnquiry = async(req, res) => {
    try{
        const data = await Enquiry.findAll();
        const wpEnquiry = data.map(enquiry => {
            return {
                id: enquiry.id,
                pincode: enquiry.pincode,
                product: enquiry.product,
                faceArea: enquiry.faceArea,
                targetStartDate: enquiry.targetStartDate,
                targetEndDate: enquiry.targetEndDate,
                attachment: enquiry.attachment,
            }
        });
        res.status(200).send(wpEnquiry);
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving enquiries."
        });
    }
}

exports.scEnquiry = async(req, res) => {
    try{
        const data = await Enquiry.findAll();
        const scEnquiry = data.map(enquiry => {
            return {
                id: enquiry.id,
                pincode: enquiry.pincode,
                product: enquiry.product,
                faceArea: enquiry.faceArea,
                startDate: enquiry.startDate,
                endDate: enquiry.endDate,
            }
        });
        res.status(200).send(scEnquiry);
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving enquiries."
        });
    }
}

exports.fcEnquiry = async(req, res) => {
    try{
        const data = await Enquiry.findAll();
        const fcEnquiry = data.map(enquiry => {
            return {
                id: enquiry.id,
                orderId: enquiry.orderId,
                name: enquiry.name,
                address: enquiry.address,
                pincode: enquiry.pincode,
                locationCode: enquiry.locationCode,
                customerCordinator: enquiry.customerCordinator,
                customerCordinatorNumber: enquiry.customerCordinatorNumber,
                sourceCordinator: enquiry.sourceCordinator,
                sourceCordinatorNumber: enquiry.sourceCordinatorNumber,
                factoryCordinator: enquiry.factoryCordinator,
                factoryCordinatorNumber: enquiry.factoryCordinatorNumber,
                productId: enquiry.productId,
                product: enquiry.product,
                productCode: enquiry.productCode,
                faceArea: enquiry.faceArea,
                targetStartDate: enquiry.targetStartDate,
                targetEndDate: enquiry.targetEndDate,
                attachment: enquiry.attachment,
            }
        });
        res.status(200).send(fcEnquiry);
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving enquiries."
        });
    }
}