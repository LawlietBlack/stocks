'use strict';

angular.module('stocksApp')

.controller('MainCtrl', function ($scope, $http, socket) {

  $scope.validStocks = ['TFSC','TFSCR','TFSCU','TFSCW','PIH','FLWS','FCTY','FCCY','SRCE','VNET','TWOU','DGLD','DSLV','UGLD','USLV','JOBS','SIXD','CAFD','EGHT','AVHI','SHLM','AAON','ABAX','ABY','ABGB','ABEO','ABEOW','ABMD','AXAS','ACTG','ACHC','ACAD','ACST','AXDX','XLRN','ANCX','ARAY','VXDN','VXUP','ACRX','ACET','AKAO','ACHN','ACIW','ACRS','ACNB','ACOR','ACTS','ACPW','ATVI','ACTA','ACUR','ACXM','ADMS','ADMP','ADAP','ADUS','AEY','ADEP','IOTS','ADMA','ADBE','ADTN','ADRO','AEIS','AMD','ADXS','ADXSW','MULT','YPRO','AEGR','AEGN','AEHR','AMTX','AEPI','AERI','AVAV','AEZS','AEMD','AFMD','AFFX','AGEN','AGRX','AGYS','AGIO','AGFS','AGFSW','AIMT','AIRM','AIRT','ATSG','AMCN','AIXG','AKAM','AKTX','AKBA','AKER','AKRX','ALRM','ALSK','AMRI','ABDC','ADHD','ALDR','ALDX','ALXN','ALXA','ALCO','ALGN','ALIM','ALKS','ABTX','ALGT','AFOP','AIQ','AHGP','ARLP','AHPI','AMOT','ALQA','ALLT','MDRX','AFAM','ALNY','AOSL','GOOG','GOOGL','SMCP','ATEC','ALTR','ASPS','AIMC','AMAG','AMRN','AMRK','AYA','AMZN','AMBC','AMBCW','AMBA','EPAX','AMCX','DOX','AMDA','AMED','UHAL','ASBI','ATAX','AMOV','AAL','AGNC','AGNCB','AGNCP','MTGE','MTGEP','ACSF','ACAS','GNOW','AETI','AMIC','AMNB','ANAT','APEI','ARII','AMRB','ASEI','AMSWA','AMSC','AMWD','CRMT','ABCB','AMSF','ASRV','ASRVP','ATLO','AMGN','FOLD','AMKR','AMPH','AMSG','AMSGP','ASYS','AFSI','AMRS','ANAC','ANAD','ADI','ALOG','ANCB','ABCW','ANGI','ANGO','ANIP','ANIK','ANSS','ATRS','ANTH','ABAC','ATNY','APIC','APOG','APOL','AINV','APPF','AAPL','ARCI','APDN','APDNW','AGTC','AMAT','AMCC','AAOI','AREX','APRI','APTO','AQMS','AQXP','AUMA','AUMAU','AUMAW','ARDM','PETX','ABUS','ARCW','ABIO','RKDA','ARCB','ACGL','ACAT','ARDX','ARNA','ARCC','AGII','AGIIL','ARGS','ARIS','ARIA','ARKR','ARMH','ARTX','ARWA','ARWAR','ARWAU','ARWAW','ARQL','ARRY','ARRS','DWAT','AROW','ARWR','ARTNA','ARTW','ASBB','ASNA','ASND','ASCMA','ASTI','APWC','ASML','AZPN','ASMB','ASFI','ASTE','ALOT','ATRO','ASTC','ASUR','ATAI','ATRA','ATHN','AFCB','ATHX','AAPC','AAME','ACFC','ATNI','ATLC','AAWW','AFH','ATML','ATOS','ATRC','ATRI','ATRM','ATTU','LIFE','AUBN','AUDC','AUPH','EARS','ADAT','ABTL','ADSK','ADP','AVGO','AAVL','AVNU','AVEO','AVNW','AVID','AVGR','CAR','AWRE','ACLS','AXPW','AXPWW','AXGN','AXTI','BCOM','RILY','BOSC','BEAV','BIDU','BCPC','BWINA','BWINB','BLDP','BANF','BANFP','BKMU','BOCH','BMRC','BKSC','BOTJ','OZRK','BFIN','BWFG','BANR','BZUN','TAPR','BHAC','BHACR','BHACU','BHACW','BBSI','BSET','BYBK','BYLK','BV','BBCN','BCBP','BDCV','BECN','BSF','BBGI','BEBE','BBBY','BELFA','BELFB','BLPH','BLCM','BNCL','BNFT','BNTC','BNTCW','BGCP','BGFV','BIND','ORPN','BASI','BCDA','BIOC','BCRX','BIOD','BDSI','BIIB','BIOL','BLFS','BLRX','BMRN','BVXV','BVXVW','BPTH','BIOS','BBC','BBP','BSTC','BSPM','BOTA','TECH','BEAT','BITI','BDMS','BJRI','BBOX','BDE','BLKB','BBRY','HAWK','BKCC','ADRA','ADRD','ADRE','ADRU','BLMN','BCOR','BLBD','BUFF','BBLU','BHBK','NILE','BLUE','BKEP','BKEPP','BPMC','BNCN','BOBE','BOFI','WIFI','BOJA','BOKF','BONA','BNSO','BAMM','BPFH','BPFHP','BPFHW','EPAY','BDBD','BLVDU','BOXL','BOXLW','BCLI','BBRG','BBEP','BBEPP','BDGE','BLIN','BRID','BCOV','BRCM','BSFT','BVSN','BYFC','BWEN','BRCD','BRKL','BRKS','BRKR','BMTC','BLMT','BSQR','BWLD','BLDR','BUR','CFFI','CHRW','CA','CCMP','CDNS','CDZI','CACQ','CZR','CSTE','PRSS','CLBS','CLMS','CHY','CHI','CCD','CFGE','CHW','CGO','CSQ','CAMP','CVGW','CFNB','CALA','CALD','CALM','CLMT','ABCD','CAMB','CAMBU','CAMBW','CAC','CAMT','CSIQ','CGIX','CPHC','CBNJ','CPLA','CBF','CCBG','CPLP','CSWC','CPTA','CLACU','CFFN','CAPN','CAPNW','CAPR','CPST','CARA','CARB','CBYL','CRDC','CFNL','CRME','CSII','CATM','CDNA','CECO','CTRE','CKEC','CLBH','CARO','CART','CRZO','TAST','CRTN','CARV','CASM','CACB','CSCD','CWST','CASY','CASI','CASS','CATB','CBIO','CPRX','CATY','CATYW','CVCO','CAVM','CBFV','CNLM','CNLMR','CNLMU','CNLMW','CBOE','CDK','CDW','CECE','CPXX','CELG','CELGZ','CLDN','CLDX','CLRB','CLRBW','CLLS','CBMG','CLSN','CYAD','CEMP','CETX','CSFL','CETV','CFBK','CENT','CENTA','CVCY','CENX','CNBKA','CNTY','CPHD','CRNT','CERCU','CERE','CERN','CERU','CERS','KOOL','CEVA','CSBR','CYOU','HOTR','HOTRW','CTHR','GTLS','CHTR','CHFN','CHKP','CHEK','CHEKW','CEMI','CHFC','CCXI','CHMG','CHKE','CHEV','CHMA','CBNK','PLCE','CMRX','CADC','CALI','CAAS','CBAK','CBPO','CCCL','CCCR','JRJC','CHOP','HGSH','CHLN','CNIT','CJJD','HTHT','CHNR','CREG','CSUN','CNTF','CXDC','CNYD','CCIH','CNET','IMOS','CHSCL','CHSCM','CHSCN','CHSCO','CHSCP','CHDN','CHUY','CDTX','CIFC','CMCT','CMPR','CINF','CIDM','CTAS','CPHR','CRUS','CSCO','CTRN','CZNC','CZWI','CZFC','CIZN','CTXS','CHCO','CIVB','CIVBP','CDTI','CLNE','CLNT','CLFD','CLRO','CLIR','CBLI','CSBK','CLVS','CMFN','CME','CCNE','CISG','CNV','CWAY','COBZ','COKE','CDRB','CDXS','CVLY','JVA','CCOI','CGNT','CGNX','CTSH','COHR','CHRS','COHU','CLRX','CLCT','COLL','CIGI','CBAN','CLCD','COLB','COLM','CMCO','CBMX','CMCSA','CMCSK','CBSH','CBSHP','CUBN','CVGI','COMM','CSAL','JCS','ESXB','CYHHZ','CTBI','CWBC','COB','CVLT','CIZ','CIL','CID','CSA','CDC','CSF','CFO','CFA','CDL','CSB','CGEN','CPSI','CTG','SCOR','CHCI','CMTL','CNAT','CNCE','CXRX','CCUR','CDOR','CDORO','CDORP','CFMS','CNFR','CNMD','CTWS','CNOB','CNXR','CONN','CNSL','CWCO','CTCT','CPSS','CFRX','CFRXW','CFRXZ','CTRV','CTRL','CPRT','CRBP','CORT','BVA','CORE','CORI','CSOD','CRVL','COSI','CSGP','COST','CPAH','ICBK','CVTI','COVS','COWN','COWNL','PMTS','CPSH','CRAI','CBRL','BREW','CRAY','CACC','GLDI','SLVO','CREE','CRESY','CRTO','CROX','CCRN','CRDS','CRWS','CRWN','CYRX','CYRXW','CSGS','CCLP','CSPI','CSWI','CTCM','CTIC','CTIB','CTRP','CUNB','CUI','CPIX','CMLS','CRIS','CUTR','CVBF','CVV','CYAN','CYBR','CYBE','CYCC','CYCCP','CBAY','CYNA','CYNO','CY','CYRN','CONE','CYTK','CTMX','CYTX','CTSO','CYTR','TVIZ','TVIX','ZIV','XIV','DJCO','DAKT','DARA','DAIO','DTLK','DRAM','DWCH','PLAY','DTEA','DWSN','DBVT','DHRM','DFRG','TACO','TACOW','DCTH','DGAS','DELT','DELTW','DENN','XRAY','DEPO','DSCI','DERM','DEST','DXLG','DSWL','DTRM','DXM','DXCM','DHXM','DMND','DHIL','FANG','DCIX','DRNA','DGII','DMRC','DRAD','DGLY','APPS','DCOM','DIOD','DPRX','DISCA','DISCB','DISCK','DSCO','DISH','DVCR','BAGR','DLHC','DNBF','DLTR','DGICA','DGICB','DMLP','DORM','EAGL','EAGLU','EAGLW','DRWI','DRWIW','DWA','DRYS','DSKX','DSPG','CADT','CADTR','CADTU','CADTW','DTSI','DNKN','DRRX','DXPE','DYAX','BOOM','DYSL','DYNT','DVAX','ETFC','EBMT','EGBN','EGLE','EGRX','ELNK','EWBC','EACQ','EACQU','EACQW','EML','EVBS','EBAY','EBIX','ELON','ECHO','ECTE','SATS','EEI','ECAC','ECACR','ECACU','ESES','EDAP','EDGE','EDGW','EDUC','EFUT','EGAN','EGLT','EHTH','LOCO','EMITF','ESLT','ERI','ELRC','ESIO','EA','EFII','ELSE','ELEC','ELECU','ELECW','EBIO','RDEN','CAPX','ESBK','LONG','ELTK','EMCI','EMCF','EMKR','EMMS','EMMSP','NYNY','ERS','ENTA','ECPG','WIRE','ENDP','ECYT','ELGX','EIGI','WATT','EFOI','ERII','EXXI','ENOC','ENG','ENPH','ESGR','ENFC','ENTG','ENTL','ETRM','EBTC','EFSC','EGT','ENVI','ENZN','ENZY','EPIQ','EPRS','EPZM','PLUS','EQIX','EQFN','EAC','ERIC','ERIE','ESCA','ESCR','ESCRP','ESMC','ESPR','ESSA','EPIX','ESND','ESSX','ETSY','CLWT','EEFT','ESEA','EVEP','EVK','EVLV','EVOK','EVOL','EXA','EXAS','EXAC','EXEL','EXFO','EXLS','EXPE','EXPD','EXPO','ESRX','EXLP','EXTR','EYEG','EYEGW','EZCH','EZPW','FFIV','FB','FCS','FRP','FWM','FALC','DAVE','FARM','FFKT','FMNB','FARO','FAST','FATE','FBSS','FBRC','FDML','FNHC','FEIC','FHCO','FENX','FCSC','FGEN','ONEQ','LION','FDUS','FRGI','FSAM','FSC','FSCFL','FSFR','FITB','FITBI','FNGN','FISI','FNSR','FNJN','FNTC','FNTCU','FNTCW','FEYE','FBNC','FNLC','FRBA','BUSE','FBIZ','FCVA','FCAP','FCFS','FCNCA','FCLF','FCBC','FCCO','FCFP','FBNK','FDEF','FFNM','FFBC','FFBCW','FFIN','THFF','FFNW','FFWM','INBK','FIBK','FRME','FMBH','FMBI','FNBC','FNFG','FNWB','FSFG','FSGI','FSLR','FSBK','FPA','BICK','FBZ','FCAN','FTCS','FCA','FDT','FDTS','FV','IFV','FEM','FEMB','FEMS','FTSM','FEP','FEUZ','TDIV','MDIV','FGM','FTGC','FTHI','HYLS','FHK','FPXI','YDIV','SKYY','CU','PLTM','FJP','FLN','FTLB','LMBS','FMB','QABA','CIBR','FONE','QCLN','GRID','CARZ','RDVY','QQEW','QQXT','QTEC','AIRR','QINC','FTSL','FKO','FDIV','FSZ','FTW','TUSA','FKU','FUNC','SVVC','FMER','FSV','FISV','FIVE','FPRX','FIVN','FLML','FLKS','FLXN','SKOR','LKOR','MBSD','QLC','FLXS','FLEX','FLIR','FLDM','FFIC','FOMX','FOGO','FONR','FES','FORM','FORTY','FORR','FTNT','FBIO','FWRD','FORD','FWP','FOSL','FMI','FXCB','FOXF','FRAN','FELE','FRED','FREE','RAIL','FEIM','FRPT','FTR','FTRPR','FRPH','FSBW','FTD','FSYS','FTEK','FCEL','FULL','FULLL','FLL','FULT','FSNN','FFHL','FXEN','FXENP','GK','WILC','GAIA','GLPG','GALT','GALTU','GALTW','GALE','GLMD','GLPI','GPIC','GRMN','GGAC','GGACR','GGACU','GGACW','GARS','GENC','GNCMA','GFN','GFNCP','GFNSL','GENE','GNMK','GNCA','GHDX','GNTX','THRM','GNVC','GTWN','GEOS','GABC','GERN','GEVO','ROCK','GIGM','GIGA','GIII','GILT','GILD','GBCI','GLAD','GLADO','GOOD','GOODN','GOODO','GOODP','GAIN','GAINN','GAINO','GAINP','LAND','GLBZ','GBT','GDEF','ENT','GBLI','GBLIZ','GPAC','GPACU','GPACW','GSOL','ACTX','QQQC','SOCL','ALTY','SRET','YLCO','GAI','GSM','GBIM','GLBS','GLRI','GLUU','GLYC','GOGO','GLNG','GMLP','GLDC','GDEN','GOGL','GBDC','GTIM','GPRO','GMAN','GRSH','GRSHU','GRSHW','GPIA','GPIAU','GPIAW','LOPE','GRVY','GBSN','GLDD','GSBC','GNBC','GRBK','GPP','GPRE','GCBC','GLRE','GRIF','GRFS','GRPN','OMAB','GGAL','GSIG','GSIT','GSVC','GTXI','GBNK','GFED','GUID','GIFI','GURE','GPOR','GWPH','GWGH','GYRO','HEES','HLG','HNRG','HALL','HALO','HBK','HMPR','HBHC','HBHCL','HNH','HAFC','HNSN','HQCL','HDNG','HLIT','HRMN','HRMNU','HRMNW','TINY','HART','HBIO','HCAP','HCAPL','HAS','HA','HCOM','HWKN','HWBK','HAYN','HDS','HIIQ','HCSG','HQY','HSTM','HWAY','HTLD','HTLF','HTWR','HTBX','HSII','HELE','HMNY','HMTV','HNNA','HCAC','HCACU','HCACW','HSIC','HTBK','HFWA','HEOP','HCCI','MLHR','HRTX','HSKA','HFFC','HIBB','HPJ','HIHO','HIMX','HIFS','HSGX','HMNF','HMSY','HOLI','HOLX','HBCP','HOMB','HFBL','AWAY','HMIN','HMST','HTBI','HKTV','CETC','HOFT','HFBC','HBNC','HZNP','HRZN','ZINC','HDP','HMHC','HWCC','HOVNP','HBMD','HSNI','HTGM','HUBG','HCBK','HSON','HDSN','HBAN','HBANP','HURC','HURN','HTCH','HBP','HDRA','HDRAR','HDRAU','HDRAW','HYGS','IDSY','IACI','IKGH','IBKC','IBKCP','ICAD','IEP','ICFI','ICLR','ICON','ICUI','IPWR','INVE','IDRA','IDXX','DSKY','IROQ','IRG','RXDX','IIVI','KANG','IKNX','ILMN','ISNS','IMMR','ICCC','IMDZ','IMNP','IMGN','IMMU','IPXL','IMMY','INCR','SAAS','INCY','INDB','IBCP','IBTX','IDSA','INFN','INFI','IPCC','III','IFON','IMKTA','INWK','INNL','INOD','IPHS','IOSP','ISSC','INGN','ITEK','INOV','INO','NSIT','ISIG','INSM','IIIN','PODD','INSY','NTEC','IART','IDTI','IESC','ISSI','INTC','IQNT','IPCI','IPAR','IBKR','ININ','ICPT','ICLD','ICLDW','IDCC','TILE','IMI','INAP','IBOC','ISCA','IGLD','IIJI','XENT','INTX','ISIL','IILG','IVAC','INTL','INTLL','ITCI','IIN','INTU','ISRG','INVT','SNAK','ISTR','ISBC','ITIC','NVIV','IVTY','IPAS','DTUL','DFVL','IPCM','IPGP','IRMD','IRIX','IRDM','IRDMB','IRBT','IRWD','IRCP','COMT','GNMA','IFEU','IFGL','ACWX','ACWI','AAXJ','EEMA','EEML','EUFN','IEUS','QAT','UAE','IBB','SOXX','EMIF','ICLN','WOOD','INDY','ISHG','IGOV','ISIS','ISLE','ISRL','ITRI','ITRN','ITUS','XXIA','IXYS','JJSF','MAYS','JBHT','JCOM','JASO','JKHY','JACK','JXSB','JAXB','JAGX','JAKK','JMBA','JRVR','ERW','JASN','JASNW','JAZZ','JD','JBLU','JTPY','JCTCF','DATE','JST','JIVE','WYIG','WYIGU','WYIGW','JOEZ','JBSS','JOUT','JNP','JUNO','KTWO','KALU','KBIO','KMDA','KNDI','KCLI','KPTI','KBSF','KCAP','KRNY','KELYA','KELYB','KMPH','KFFB','KERX','GMCR','KEQU','KTEC','KTCC','KFRC','KE','KBAL','KIN','KGJI','KINS','KONE','KIRK','KITE','KLAC','KLXI','KONA','KZ','KOPN','KRNT','KOSS','KWEB','KTOS','KUTV','KLIC','KVHI','FSTR','LJPC','LSBK','LSBG','LBAI','LKFN','LAKE','LRCX','LAMR','LANC','LNDC','LARK','LMRK','LE','LSTR','LNTH','LTRX','LPSB','LSCC','LAWS','LAYN','LCNB','LDRH','LBIX','LGCY','LGCYO','LGCYP','LTXB','LMAT','TREE','LXRX','LGIH','LHCG','LBRDA','LBRDK','LBTYA','LBTYB','LBTYK','LILA','LILAK','LVNTA','LVNTB','QVCA','QVCB','LMCA','LMCB','LMCK','TAX','LTRPA','LTRPB','LPNT','LCUT','LFVN','LWAY','LGND','LTBR','LPTH','LLEX','LIME','LLNW','LMNR','LINC','LECO','LIND','LINDW','LLTC','LNCO','LINE','LBIO','LIOX','LPCN','LIQD','LQDT','LFUS','LIVN','LOB','LIVE','LPSN','LKQ','LMIA','LOGI','LOGM','LOJN','EVAR','CNCR','LOOK','LORL','LOXO','LPTN','LPLA','LRAD','LYTS','LULU','LITE','LMNX','LMOS','LUNA','MBTF','MTSI','MCBC','MFNC','MCUR','MGNX','MCBK','MAGS','MGLN','MPET','MGIC','CALL','MNGA','MGYR','MHLD','MHLDO','MSFG','COOL','MMYT','MBUU','MLVF','MAMS','MANH','LOAN','MNTX','MTEX','MNKD','MANT','MARA','MCHX','MARPS','MRNS','MKTX','MKTO','MRKT','MRLN','MAR','MBII','MRTN','MMLP','MRVL','MASI','MTLS','MTRX','MAT','MATR','MATW','MFRM','MTSN','MXIM','MXWL','MZOR','MBFI','MBFIP','MCFT','MGRC','MDCA','MCOX','TAXI','MDAS','MTBC','MNOV','MDSO','MDGS','MDVN','MDWD','MDVX','MDVXW','MEET','MEIP','MELA','MPEL','MLNX','MELR','MEMP','MRD','MENT','MTSL','MELI','MBWM','MERC','MBVT','MRCY','EBSB','VIVO','MMSI','MACK','MSLI','MLAB','CASH','MBLX','MEOH','MEIL','MEILW','MEILZ','METR','MFRI','MGCD','MGEE','MGPI','MCHP','MU','MICT','MICTW','MSCC','MSFT','MSTR','MVIS','MPB','MCEP','MBRG','MBCN','MSEX','MOFG','MDXG','MNDO','MB','NERV','MRTX','MIRN','MSON','MIND','MITK','MITL','MKSI','MMAC','MINI','MOBL','MOCO','MDSY','MLNK','MOKO','MOLG','MNTA','MOMO','MCRI','MNRK','MDLZ','MGI','MPWR','TYPE','MNRO','MRCC','MNST','MHGC','MORN','MOSY','MPAA','MDM','MRVC','MSBF','MSG','MTSC','LABL','MFLX','MFSF','MYL','MYOS','MYRG','MYGN','NBRV','NANO','NSPH','NSTG','NK','NSSC','NDAQ','NTRA','NATH','NAUH','NKSH','FIZZ','NCMI','NCOM','NGHC','NGHCO','NGHCP','NGHCZ','NHLD','NATI','NATL','NPBC','NRCIA','NRCIB','NSEC','NWLI','NAII','NHTC','NATR','BABY','NVSL','NAVI','NBTB','NCIT','NKTR','NEOG','NEO','NEON','NEOS','NEOT','NVCN','NRX','NEPT','UEPS','NETE','NTAP','NTES','NFLX','NTGR','NLST','NTCT','NTWK','CUR','NBIX','NDRM','NURO','NUROW','NYMT','NYMTO','NYMTP','NBBC','NLNK','NEWP','NWS','NWSA','NEWS','NEWT','NEWTZ','NXST','NVET','NFEC','EGOV','NICE','NICK','NIHD','NVLS','NMIH','NNBR','NDLS','NDSN','NSYS','NTK','NBN','NECB','NTIC','NTRS','NTRSP','NFBK','NRIM','NWBI','NWBO','NWBOW','NWPX','NCLH','NWFL','NVFY','NVMI','NVDQ','MIFI','NVAX','NVCR','NVGN','NTLS','NUAN','NMRX','NUTR','NTRI','NUVA','QQQX','NVEE','NVEC','NVDA','NXPI','NXTM','NXTD','NXTDW','NYMX','OIIM','OVLY','OCAT','OBCI','OPTT','ORIG','OSHC','OCFC','OCRX','OCLR','OFED','OCUL','OCLS','OCLSW','OMEX','ODP','OFS','OHAI','OVBC','OHRP','ODFL','OLBK','ONB','OPOF','OSBC','OSBCP','OLLI','ZEUS','OFLX','OMER','OMCL','OVTI','ON','OTIV','OGXI','ONCY','OMED','ONTX','ONCS','ONTY','OHGI','ONFC','ONVI','OTEX','OPXA','OPXAW','OPGN','OPGNW','OPHT','OBAS','OCC','OPHC','OPB','ORMP','OSUR','ORBC','ORBK','ORLY','OREX','SEED','OESX','ORIT','ORRF','OFIX','OSIS','OSIR','OSN','OTEL','OTIC','OTTR','OUTR','OVAS','OSTK','OXBR','OXBRW','OXFD','OXLC','OXLCN','OXLCO','OXGN','PFIN','PTSI','PCAR','PACEU','PACB','PCBK','PDVW','PEIX','PMBC','PPBI','PAACU','PSUN','PCRX','PACW','PTIE','PAAS','PNRA','PANL','PZZA','FRSH','PRGN','PRGNL','PRTK','PRXL','PCYG','PSTB','PKBK','PRKR','PKOH','PARN','PTNR','PBHC','PATK','PNBK','PATI','PEGI','PDCO','PTEN','PAYX','PCTY','PYDS','PYPL','PCCC','PCMI','PCTI','PDCE','PDFS','PDII','PDLI','SKIS','PGC','PEGA','PCO','PENN','PFLT','PNNT','PWOD','PTXP','PEBO','PEBK','PFBX','PFIS','PBCT','PUB','PRCP','PPHM','PPHMP','PRFT','PFMT','PERF','PSEM','PERI','PESI','PTX','PERY','PRSN','PRSNW','PGLC','PETS','PFSW','PGTI','PHII','PHIIK','PAHC','PHMD','PLAB','PICO','PIRS','PPC','PME','PNFP','PPSI','PXLW','PLNR','PLPM','PLXS','PLUG','PLBC','PSTI','PMCS','PBSK','PNTR','PCOM','PBCP','PLCM','POOL','POPE','PLKI','BPOP','BPOPM','BPOPN','PBIB','PTLA','PBPB','PCH','POWL','POWI','PSIX','PDBC','DWTR','PRFZ','PAGG','PSAU','IPKW','LDRI','LALT','PNQI','QQQ','PSCD','PSCC','PSCE','PSCF','PSCH','PSCI','PSCT','PSCM','PSCU','POZN','PRAA','PRAH','PRAN','PFBC','PLPC','PRXI','PFBI','PINC','LENS','PRGX','PSMT','PBMD','PNRG','PRMW','PRIM','PRZM','PVTB','PVTBP','PDEX','IPDN','PFIE','PGNX','PRGS','DNAI','PFPT','PRPH','PRQR','BIB','UBIO','TQQQ','ZBIO','SQQQ','BIS','PSEC','PRTO','PRTA','PWX','PVBC','PROV','PBIP','PSBH','PSDV','PMD','PTC','PTCT','PULB','PULM','PCYO','QADA','QADB','QCCO','QCRH','QGEN','QIWI','QKLS','QLIK','QLGC','QLTI','QRVO','QCOM','QSII','QBAK','QLYS','QTWW','QRHC','QUIK','QDEL','QPAC','QPACU','QPACW','QNST','QUMU','QUNR','QTNT','QTNTW','RRD','RADA','RDCM','ROIA','ROIAK','RSYS','RDUS','RDNT','RDWR','RMBS','RAND','RLOG','GOLD','RPD','RPTP','RAVE','RAVN','ROLL','RICK','RCMT','RLOC','RDI','RDIB','RGSE','RELY','RNWK','RP','UTES','DAX','UK','QYLD','RCON','REPH','RRGB','RDHL','REDF','REGN','RGNX','RGLS','REIS','RELV','RLYP','MARK','REMY','RNST','REGI','RCII','RTK','RENT','RGEN','RPRX','RPRXW','RPRXZ','RJET','RBCAA','FRBK','REFR','RESN','REXI','RECN','ROIC','SALE','RTRX','RVNC','RVLT','RWLK','REXX','RFIL','RGCO','RIBT','RIBTW','RELL','RIGL','NAME','RNET','RITT','RITTW','RTTR','RIVR','RVSB','RLJE','RMGN','ROBO','RCPI','FUEL','RMTI','RCKY','RMCF','RSTI','ROIQ','ROIQU','ROIQW','ROKA','ROSG','ROST','ROVI','RBPAA','RGLD','ROYL','RPXC','RRM','RTIX','RBCN','RUSHA','RUSHB','RUTH','RXII','RYAAY','STBA','SANW','SBRA','SBRAP','SABR','SAEX','SAFT','SAGE','SGNT','SAIA','SAJA','SALM','SAL','SAFM','SNDK','SASR','SGMO','SANM','GCVRZ','SPNS','SRPT','SBFG','SBFGP','SBAC','SCSC','SMIT','SCHN','SCHL','SCLN','SGMS','SQI','SCYX','SEAC','SBCF','STX','SHIP','SRSC','SHLD','SHLDW','SHOS','SPNE','SGEN','EYES','SNFCA','SEIC','SLCT','SCSS','SIGI','LEDS','SMLR','SMTC','SENEA','SENEB','SNMX','SQNM','SQBG','MCRB','SREV','SFBS','SEV','SVBI','SFXE','SGOC','GAME','SMED','SHEN','SHLO','SHPG','SCVL','SHBI','SHOR','SFLY','SIFI','SIEB','SIEN','BSRR','SWIR','SIFY','SIGM','SIAL','SGMA','SGNL','SBNY','SBNYW','SLGN','SILC','SGI','SLAB','SIMO','SPIL','SSRI','SAMG','SFNC','SLP','SINA','SBGI','SMAC','SMACR','SMACU','SINO','SVA','SIRI','SIRO','SITO','SZMK','SKUL','SKYS','SKLN','SKLNU','MOBI','SPU','SKBI','SKYW','SWKS','ISM','JSM','OSM','SLM','SLMAP','SLMBP','SMT','SPRO','SWHC','SMSI','SMTX','SMTP','LNCE','SODA','SOHU','SLRC','SUNS','SLTD','SCTY','SEDG','SZYM','SONC','SOFO','SONS','SPHS','SORL','SRNE','SOHO','SOHOL','SOHOM','SFBC','SSB','SOCB','SFST','SMBC','SONA','SBSI','OKSB','SP','SPAN','SBSA','SGRP','SPKE','ONCE','SPAR','SPTN','SPPI','SPDC','ANY','SPEX','SAVE','SPLK','SPOK','SPWH','FUND','SFM','SPSC','SSNC','STAA','STAF','STMP','STLY','SPLS','SBLK','SBLKL','SBUX','STRZA','STRZB','STFC','STBZ','SIBC','SNC','STDY','GASS','STLD','SXCL','SMRT','STNR','STEM','STML','STXS','SRCL','SRCLP','STRL','SHOO','SSFN','STCK','SYBT','BANX','SGBK','SSYS','STRT','STRS','STRA','STRM','SBBP','STB','SCMP','SUBK','SUMR','SMMF','SSBI','SMMT','SNBC','SNHY','SEMI','SNSS','GOMO','STKL','SPWR','RUN','SBCP','SSH','SMCI','SPCB','SCON','SGC','SUPN','SPRT','SGRY','SCAI','SRDX','SBBX','TOR','SIVB','SIVBO','SWSH','SYKE','SYMC','SSRG','SYNC','SYNL','SYNA','SNCR','SGYP','SGYPU','SGYPW','ELOS','SNPS','SNTA','SYNT','SYMX','SYUT','SYPR','SYRX','TROW','TTOO','TAIT','TTWO','TLMR','TNDM','TLF','TNGO','TANH','TEDU','TASR','TATT','TAYD','TCPC','TEAR','TECD','TCCO','TTGT','TGLS','TGEN','TSYS','TNAV','TTEC','TENX','GLBL','TERP','TRTL','TRTLU','TRTLW','TBNK','TSRO','TESO','TSLA','TESS','TSRA','TTEK','TLOG','TTPH','TCBI','TCBIL','TCBIP','TCBIW','TXN','TXRH','TFSL','TGTX','ABCO','ANDE','TBBK','BONT','CG','CAKE','CHEF','TCFC','DSGX','DXYN','ENSG','XONE','FINL','FBMS','FLIC','TFM','GT','HABT','HCKT','HAIN','CUBA','INTG','JYNT','KEYW','KHC','MDCO','MIK','MIDD','NAVG','STKS','PCLN','PRSC','SPNC','ULTI','YORW','NCTY','TBPH','THRX','TST','TCRD','THLD','THTI','TICC','TTS','TIL','TSBK','TIPT','TITN','TTNP','TIVO','TBRA','TKAI','TNXP','TISA','TOPS','TORM','TRCH','TSEM','TW','TWER','CLUB','TOWN','TCON','TSCO','TWMC','TACT','TRNS','TBIO','TGA','TTHI','TZOO','TRVN','TCBK','TRIL','TRS','TRMB','TRIB','TRIP','TSC','TBK','TRIV','TROV','TROVU','TROVW','TRUE','THST','TRST','TRMK','TSRI','TTMI','TUBE','TCX','TUES','TOUR','HEAR','TUTI','TUTT','FOX','FOXA','TWIN','TRCB','USCR','PRTS','USEG','GROW','UBIC','UBNT','UFPT','ULTA','UCTT','RARE','ULBI','ULTR','UTEK','UMBF','UMPQ','UNAM','UNIS','UBSH','UNB','UNXL','QURE','UBCP','UBOH','UBSI','UCBA','UCBI','UCFC','UDF','UBNK','UFCS','UIHC','UNFI','UNTD','UBFO','USBI','USLM','UTHR','UG','UNTY','OLED','UEIC','UFPI','USAP','UACL','UVSP','UPIP','UPLD','URRE','URBN','ECOL','DTYS','DTYL','DTUS','DFVS','FLAT','DLBS','DLBL','STPP','USAT','USATP','USAK','USMD','UTMD','UTIW','UTSI','VALX','VALU','VNDA','VWOB','VNQI','VGIT','VCIT','VCLT','VGLT','VMBS','VNR','VNRAP','VNRBP','VNRCP','VONE','VONG','VONV','VTWO','VTWG','VTWV','VTHR','VCSH','VGSH','VTIP','BNDX','VXUS','VPCO','VPCOU','VRNS','VDSI','VBLT','VASC','VBIV','WOOF','VECO','APPY','VRA','VCYT','VSTM','VCEL','VRNT','VRSN','VRSK','VBTX','VRML','VSAR','VTNR','VRTX','VRTA','VRTB','VIA','VIAB','VSAT','VIAV','VICL','VICR','VBND','VUSE','VIDI','VDTH','VGGL','VKTX','VBFC','VLGEA','VIMC','VIP','VNOM','VIRC','VA','VIRT','VSCP','VRTS','VRTU','VISN','VTAE','VTL','VVUS','VIIZ','VIIX','VOD','VLTC','VOXX','VRNG','VSEC','VTVT','VUZI','VWR','WGBS','WBA','WRES','WAFD','WAFDW','WASH','WFBI','WSBF','WAVX','WAYN','WSTG','WDFC','FLAG','WWWW','WBMD','WB','WEBK','WEN','WERN','WSBC','WTBA','WSTC','WMAR','WABC','WBB','WSTL','WDC','WFD','WLB','WPRT','WEYS','WHLR','WHLRP','WHLRW','WHF','WHFBL','WFM','WILN','WHLM','WVVI','WLDN','WLFC','WIBC','WIN','WING','WINA','WTFC','WTFCM','WTFCW','AGND','AGZD','HYND','HYZD','CXSE','EMCG','EMCB','DGRE','DXGE','WETF','DXJS','JGBB','DXKW','GULF','CRDT','DGRW','DGRS','DXPS','UBND','WIX','WLRH','WLRHU','WLRHW','WMIH','WBKC','WWD','WRLD','WOWO','WPCS','WPPGY','WMGI','WMGIZ','WSFS','WSFSL','WSCI','WVFC','WYNN','XBIT','XELB','XCRA','XNCR','XBKS','XENE','XNPT','XGTI','XGTIW','XLNX','XOMA','XOOM','XPLR','XTLB','XNET','MESG','YHOO','YNDX','YDLE','YOD','YCB','YRCW','YECO','YY','ZFGN','ZAGG','ZAIS','ZBRA','ZLTQ','ZHNE','Z','ZG','ZN','ZNWAA','ZION','ZIONW','ZIONZ','ZIOP','ZIXI','ZGNX','ZSAN','ZSPH','ZUMZ','ZYNE','ZNGA'];

  //on page load, sets up variables, calls stocks api
  $('#stocks-screen').addClass('hidden');
  $scope.colors = ["green", "blue", "purple", "teal", "orange"];
  $http.get('/api/stocks/allstocks').success(function(data) {
    $scope.stocks = data.stocks;
    //syncs socket updates with getMarkitData as a callback
    socket.syncUpdates('stock', [], function(event, item, object) {
      $scope.stocks = item
      $scope.getMarkitData();
    });
  }).error(function(error) {
    // if allstocks doesn't exist, creates it with empty stocks array
    $http.post('/api/stocks/', {_id: "allstocks", stocks: []})
    .success(function(data) {
      console.log("no allstocks data, creating empty data", data)
      $scope.stocks = data.stocks;
    })
  })
  $scope.checkIfValid = function() {
    if($scope.validStocks.indexOf($scope.newStock) >= 0) {
      return true;
    } else {
      return false;
    }
  }
  //takes the stocks array and converts it into the api query parameters
  $scope.getParameters = function(stocks) {
    var parameters = { 
        "Normalized":false,
        "NumberOfDays":365,
        "DataPeriod":"Day",
        "Elements":[]
      };
    for(var i=0;i<stocks.length;i++) {
      parameters.Elements.push({
        "Symbol":stocks[i],
        "Type":"price",
        "Params":["c"]
      })
    }
    return parameters;
  };

  //call getParameters, gets data from markit api, calls renderStocks if stocks.length > 0
  $scope.getMarkitData = function() {
    $('#start-screen').fadeOut();
    var parameters = encodeURI(JSON.stringify($scope.getParameters($scope.stocks)));
    $http.jsonp('http://dev.markitondemand.com/Api/v2/InteractiveChart/jsonp?parameters=' + parameters + '&callback=JSON_CALLBACK').success(function(data) {
      //if stocks array is empty, empties viz, stocksData, otherwise, calls renderStocks
      $('#stocks-screen').removeClass('hidden').fadeIn();
      if($scope.stocks.length > 0) {
        $scope.renderStocks(data);
      } else {
        $scope.stocksData = [];
        $("#viz").empty();
      }
    }).error(function(err) {
      console.error(err)
    })
  };

  //adds newStock input, calls updateStocks
  $scope.addStock = function(newStock) {
    $scope.stocks.push(newStock);
    $scope.updateStocks();
  };

  //removes removedStock input, calls updateStocks
  $scope.removeStock = function(removedStock) {
    $scope.stocks = $scope.stocks.filter(function(stockName) {
      return stockName !== removedStock;
    })
    $scope.updateStocks();
  };

  //updates stocks api with new $scope.stocks value, calls getMarkitData 
  $scope.updateStocks = function() {
    $http.put('api/stocks/allstocks', {_id: "allstocks", stocks: $scope.stocks}).success(function(data) {
      $scope.getMarkitData();
      $scope.newStock = "";
    })
  };

  //renders stocks using d3. data input is raw data from Markit API
  $scope.renderStocks = function(data) {
    $("#viz").empty();
    $scope.viz = d3.select('#viz')
    $scope.stocksData = data.Elements;

    //set up x variables
    //set up xDomain by parsing time and passing it into d3.extent
    var parseTime = d3.time.format('%Y-%m-%dT%H:%M:%S');
    var xScale = d3.time.scale().range([900, 0]);
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom').ticks(10);
    var xMin = d3.min(data.Dates, function(d) {
      var time = parseTime.parse(d);
      time.setMonth(time.getMonth() - 1);
      return time
    });
    var xMax = d3.max(data.Dates, function(d) {
      var time = parseTime.parse(d);
      time.setMonth(time.getMonth() + 1);
      return time
    });
    console.log([xMin, xMax])
    xScale.domain([xMin, xMax]);
    $scope.viz.append('g')
      .attr('class', 'x axis')
      .call(xAxis)
      .selectAll('text')
      .attr('transform', function() {
        return 'rotate(-65)'
      })
      .style('text-anchor', 'end')
      .style('font-size', '10px')
      .attr('cx', '-10px')
      .attr('cy', '10px')


    //set up y variables
    //Set up yDomain by combining all datasets to one array, then using d3.extent
    var yScale = d3.scale.linear().range([400,0]);
    var yAxis = d3.svg.axis().scale(yScale).orient('left').ticks(10);
    var allData = [];
    for(var i=0;i<data.Elements.length;i++) {
      allData = allData.concat(data.Elements[i].DataSeries.close.values)
    }
    var yDomain = d3.extent(allData, function(d) {
      return parseInt(d)*1.1;
    });
    yScale.domain(yDomain);
    $scope.viz.append('g')
      .attr('class', 'y axis')
      .call(yAxis);


    for(var i=0;i< data.Elements.length; i++) {

      var dots = $scope.viz.selectAll('g.dots.data-set.' + data.Elements[i].Symbol)
        .data(data.Elements[i].DataSeries.close.values)
        .enter()
        .append('g')
        .attr('class', 'dots data-set')
        .attr('class', data.Elements[i].Symbol)

      dots.attr('transform', function(d, index) {
        var date = parseTime.parse(data.Dates[index]);
        var x = xScale(date) + 50;
        var y = yScale(d);
        return 'translate(' + x + ',' + y + ')'
      })
        .style('fill', $scope.colors[i])
        .style('stroke', '#222')

      dots.append('circle')
          .attr('r', 3);

      dots.append('text').text(function(d) {
          return "$" + d
        })
        .style('display', 'none');

      dots.on("mouseenter", function(d, i) {
        var dot = d3.select(this);
        dot.select('text')
           .style('display', 'block');
      });

      dots.on("mouseleave", function(d, i) {
        d3.select(this)
           .select('text')
           .style('display', 'none');
      });



      console.log(data)
    }
  };
  
});
