const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// Import Routes
const authRoute = require('./routes/authRoutes');
const userRoute = require('./routes/userRoutes');
const boardRoute = require('./routes/boardRoutes');
const listRoute = require('./routes/listRoutes');
const cardRoute = require('./routes/cardRoutes');
const checkListRoute = require('./routes/checkListRoutes');
const checkListItemRoute = require('./routes/checkListItemRoutes');
const commentRoute = require('./routes/commentRoutes');
const labelRoute = require('./routes/labelRoutes');
const productRoute = require('./routes/productRoutes');
const productSpecificaationRoute = require('./routes/productSpecificationRoutes');
const purchaseOrderRoute = require('./routes/purchaseOrderRoutes');
const todoRoute = require('./routes/todoRoutes');
const chatContactRoute = require('./routes/chat/chatContactRoutes');
const chatRoute = require('./routes/chat/chatRoutes');
const userChatRoute = require('./routes/chat/userRoutes');
const buyerRoute = require('./routes/contacts/buyerRoutes');
const merchandiserRoute = require('./routes/contacts/merchandiserRoutes');
const vendorRoute = require('./routes/contacts/vendorRoutes');
const qcRoute = require('./routes/contacts/qcRoutes');
const calenderRoute = require('./routes/calenderRoutes');
const armAdjTypeRoute = require('./routes/product-data/ArmAdjTypeRoutes');
const armMaterialRoute = require('./routes/product-data/armMaterialRoutes');
const armTypeRoute = require('./routes/product-data/armTypeRoutes');
const assemblyLevelRoute = require('./routes/product-data/assemblyLevelRoutes');
const bedSizeRoute = require('./routes/product-data/bedSizeRoutes');
const bedStorageTypeRoute = require('./routes/product-data/bedStorageTypeRoutes');
const benchTypeRoute = require('./routes/product-data/benchTypeRoutes');
const cabinetTypeRoute = require('./routes/product-data/cabinetTypeRoutes');
const cleaningCodeRoute = require('./routes/product-data/cleaningCodeRoutes');
const closureRoute = require('./routes/product-data/closureRoutes');
const dataTabRoute = require('./routes/product-data/datatabRoutes');
const drawerGlidesRoute = require('./routes/product-data/drawerGlidesRoutes');
const dresserTypeRoute = require('./routes/product-data/dresserTypeRoutes');
const etcTypeRoute = require('./routes/product-data/etcTypeRoutes');
const feetMaterialRoute = require('./routes/product-data/feetMaterialRoutes');
const frameMaterialRoute = require('./routes/product-data/frameMaterialRoutes');
const glossRoute = require('./routes/product-data/glossRoutes');
const hangingDirectionRoute = require('./routes/product-data/hangingDirectionRoutes');
const hangingHardwareRoute = require('./routes/product-data/hangingHardwareRoutes');
const hangingMethodRoute = require('./routes/product-data/hangingMethodRoutes');
const hardwareMaterialRoute = require('./routes/product-data/hardwareMaterialRoutes');
const lampTypeRoute = require('./routes/product-data/lampTypeRoutes');
const ledTypeRoute = require('./routes/product-data/ledTypeRoutes');
const lrTableRoute = require('./routes/product-data/lrTableRoutes');
const mainMaterialRoute = require('./routes/product-data/mainMaterialRoutes');
const mirrorShapeRoute = require('./routes/product-data/mirrorShapeRoutes');
const mirrorTypeRoute = require('./routes/product-data/mirrorTypeRoutes');
const officeChairFrameRoute = require('./routes/product-data/officeChairFrameRoutes');
const paintingMainMaterialRoute = require('./routes/product-data/paintingMainMaterialRoutes');
const paintTypeRoute = require('./routes/product-data/paintTypeRoutes');
const pillowRoute = require('./routes/product-data/pillowRoutes');
const removableCushionRoute = require('./routes/product-data/removableCushionRoutes');
const reversableCushionRoute = require('./routes/product-data/reversableCushionRoutes');
const seatMaterialRoute = require('./routes/product-data/seatMaterialRoutes');
const sectionalTypeRoute = require('./routes/product-data/sectionalTypeRoutes');
const stoolTypeRoute = require('./routes/product-data/stoolTypeRoutes');
const tableMechanismRoute = require('./routes/product-data/tableMechanismRoutes');
const tableTypeDiningRoute = require('./routes/product-data/tableTypeDiningRoutes');
const topMaterialRoute = require('./routes/product-data/topMaterialRoutes');
const tuftedRoute = require('./routes/product-data/tuftedRoutes');
const typeOfBulbRoute = require('./routes/product-data/typeOfBulbsRoutes');
const upholsteryFillRoute = require('./routes/product-data/upholsteryFillRoutes');
const upholsteryProductTypeRoute = require('./routes/product-data/upholsteryProductTypeRoutes');
const upholsteryTypeRoute = require('./routes/product-data/upholsteryTypeRoutes');

dotenv.config();

// Connect to DB
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true
  },
  () => {
    console.log('Connected to Database...');
  }
);

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Route Middleware
app.use('/api', authRoute);
app.use('/api/users', userRoute);
app.use('/api/boards', boardRoute);
app.use('/api/lists', listRoute);
app.use('/api/cards', cardRoute);
app.use('/api/checklists', checkListRoute);
app.use('/api/checklistitems', checkListItemRoute);
app.use('/api/comments', commentRoute);
app.use('/api/labels', labelRoute);
app.use('/api/products', productRoute);
app.use('/api/productspecifications', productSpecificaationRoute);
app.use('/api/purchaseorders', purchaseOrderRoute);
app.use('/api/todos', todoRoute);
app.use('/api/chat/contacts', chatContactRoute);
app.use('/api/chats', chatRoute);
app.use('/api/chat/user', userChatRoute);
app.use('/api/buyers', buyerRoute);
app.use('/api/merchandisers', merchandiserRoute);
app.use('/api/vendors', vendorRoute);
app.use('/api/qcs', qcRoute);
app.use('/api/events', calenderRoute);
app.use('/api/armadjtypes', armAdjTypeRoute);
app.use('/api/armMaterials', armMaterialRoute);
app.use('/api/armtypes', armTypeRoute);
app.use('/api/assemblylevels', assemblyLevelRoute);
app.use('/api/bedsizes', bedSizeRoute);
app.use('/api/bedstoragetypes', bedStorageTypeRoute);
app.use('/api/benchtypes', benchTypeRoute);
app.use('/api/cabinettypes', cabinetTypeRoute);
app.use('/api/cleaningcodes', cleaningCodeRoute);
app.use('/api/closures', closureRoute);
app.use('/api/datatabs', dataTabRoute);
app.use('/api/drawerglides', drawerGlidesRoute);
app.use('/api/dressertypes', dresserTypeRoute);
app.use('/api/etctypes', etcTypeRoute);
app.use('/api/feetmaterials', feetMaterialRoute);
app.use('/api/framematerials', frameMaterialRoute);
app.use('/api/gloss', glossRoute);
app.use('/api/hangingdirections', hangingDirectionRoute);
app.use('/api/hanginghardwares', hangingHardwareRoute);
app.use('/api/hangingmethods', hangingMethodRoute);
app.use('/api/hardwarematerials', hardwareMaterialRoute);
app.use('/api/lamptypes', lampTypeRoute);
app.use('/api/ledtypes', ledTypeRoute);
app.use('/api/lrtables', lrTableRoute);
app.use('/api/mainmaterials', mainMaterialRoute);
app.use('/api/mirrorshapes', mirrorShapeRoute);
app.use('/api/mirrortypes', mirrorTypeRoute);
app.use('/api/officechairframes', officeChairFrameRoute);
app.use('/api/paintingmainmaterials', paintingMainMaterialRoute);
app.use('/api/painttypes', paintTypeRoute);
app.use('/api/pillows', pillowRoute);
app.use('/api/removablecushions', removableCushionRoute);
app.use('/api/reversablecushions', reversableCushionRoute);
app.use('/api/seatmaterials', seatMaterialRoute);
app.use('/api/sectionaltypes', sectionalTypeRoute);
app.use('/api/stooltypes', stoolTypeRoute);
app.use('/api/tablemechanisms', tableMechanismRoute);
app.use('/api/tabletypedinings', tableTypeDiningRoute);
app.use('/api/topmaterials', topMaterialRoute);
app.use('/api/tufteds', tuftedRoute);
app.use('/api/typeofbulbs', typeOfBulbRoute);
app.use('/api/upholsteryfills', upholsteryFillRoute);
app.use('/api/upholsteryproducttypes', upholsteryProductTypeRoute);
app.use('/api/upholsterytypes', upholsteryTypeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
