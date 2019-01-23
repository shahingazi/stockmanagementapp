module.exports = {
    ra: {
        
        action: {
            add_filter: 'Add filter',
            add: 'Add',
            back: 'Go Back',
            bulk_actions: '1 item selected |||| %{smart_count} items selected',
            cancel: 'Cancel',
            clear_input_value: 'Clear value',
            clone: 'Clone',
            confirm: 'Confirm',
            create: 'নতুন',
            delete: 'Delete',
            edit: 'পরিবর্তন',
            export: 'তথ্য ডাউনলোড',
            list: 'ফালা',
            refresh: 'রিফ্রেশ তালিকা',
            remove_filter: 'Remove this filter',
            remove: 'Remove',
            save: 'Save',
            search: 'Search',
            show: 'Show',
            sort: 'Sort',
            undo: 'Undo',
        },
        boolean: {
            true: 'হাঁ',
            false: 'না',
        },
        page: {
            create: 'Create %{name}',
            dashboard: 'ড্যাশবোর্ড',
            edit: '%{name} #%{id}',
            error: 'Something went wrong',
            list: '%{name} ফালা',
            loading: 'Loading',
            not_found: 'Not Found',
            show: '%{name} #%{id}',
            
        },      
        input: {
            file: {
                upload_several:
                    'Drop some files to upload, or click to select one.',
                upload_single: 'Drop a file to upload, or click to select it.',
            },
            image: {
                upload_several:
                    'Drop some pictures to upload, or click to select one.',
                upload_single:
                    'Drop a picture to upload, or click to select it.',
            },
            references: {
                all_missing: 'Unable to find references data.',
                many_missing:
                    'At least one of the associated references no longer appears to be available.',
                single_missing:
                    'Associated reference no longer appears to be available.',                
            },
        },
        message: {
            about: 'About',
            are_you_sure: 'Are you sure?',
            bulk_delete_content:
                'Are you sure you want to delete this %{name}? |||| Are you sure you want to delete these %{smart_count} items?',
            bulk_delete_title:
                'Delete %{name} |||| Delete %{smart_count} %{name} items',
            delete_content: 'Are you sure you want to delete this item?',
            delete_title: 'Delete %{name} #%{id}',
            details: 'Details',
            error:
                "A client error occurred and your request couldn't be completed.",
            invalid_form: 'The form is not valid. Please check for errors',
            loading: 'The page is loading, just a moment please',
            no: 'No',
            not_found:
                'Either you typed a wrong URL, or you followed a bad link.',
            yes: 'Yes',
        },
        navigation: {
            no_results: 'No results found',
            no_more_results:
                'The page number %{page} is out of boundaries. Try the previous page.',
            page_out_of_boundaries: 'Page number %{page} out of boundaries',
            page_out_from_end: 'Cannot go after last page',
            page_out_from_begin: 'Cannot go before page 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            page_rows_per_page: 'Rows per page:',
            next: 'Next',
            prev: 'Prev',
        },
        auth: {
            user_menu: 'Profile',
            username: 'Username',
            password: 'Password',
            sign_in: 'Sign in',
            sign_in_error: 'Authentication failed, please retry',
            logout: 'Logout',
        },
        notification: {
            updated: 'তথ্য সফলভাবে আপডেট |||| %{smart_count} তথ্য সফলভাবে আপডেট',
            created: 'তথ্য সফলভাবে সংরক্ষিত',
            deleted: 'তথ্য সফলভাবে মুছে ফেলা হয়েছে |||| %{smart_count} তথ্য সফলভাবে মুছে ফেলা হয়েছে',
            bad_item: 'তথ্য ভুল',
            item_doesnt_exist: 'তথ্য বিদ্যমান নেই',
            http_error: 'Server communication error',
            data_provider_error:
                'dataProvider error. Check the console for details.',
            canceled: 'Action cancelled',
            logged_out: 'Your session has ended, please reconnect.'
        },
        validation: {
            required: 'Required',
            minLength: 'Must be %{min} characters at least',
            maxLength: 'Must be %{max} characters or less',
            minValue: 'Must be at least %{min}',
            maxValue: 'Must be %{max} or less',
            number: 'Must be a number',
            email: 'Must be a valid email',
            oneOf: 'Must be one of: %{options}',
            regex: 'Must match a specific format (regexp): %{pattern}',
        },
    },
    resources: {       
        product: {
            name: 'প্রোডাক্ট খাতা |||| প্রোডাক্ট খাতা',
            fields: {
                name: 'নাম',
                company: 'কোম্পানির',               
            },
            tabs: {
                Name: 'নাম',
                company: 'কোম্পানির'            
            },
        },
        transaction: {
            name: 'লেনদেন খাতা |||| লেনদেন খাতা',
            fields: {
                name: 'নাম',
                company: 'কোম্পানির',
                type: 'লেনদেনের ধরন',
                quantity: 'সংখ্যা',
                amount: 'টাকা পরিমাণ (৳)',
                createdAt:'তৈরীর তারিখ',
                Product: 'asdf'

            },
            data:{
                Sell:"বিক্রয়"
            },
            tabs: {
                productId: 'asdf'               
            },
                         
        },
        balance: {
            name: 'স্টক ব্যালেন্স খাতা|||| স্টক ব্যালেন্স খাতা',
            fields: {
                stockQuantity: 'স্টক পরিমাণ',
                totalQuantity: 'মোট পরিমাণ',  
                purchaseAmount: 'ক্রয় পরিমাণ', 
                sellingAmount: 'বিক্রয় পরিমাণ',
                productId:'পণ্যের আইডি'              
            },
            tabs: {
                Name: 'নাম',
                company: 'কোম্পানির'            
            },
        },
        users: {
            name: 'অ্যাকাউন্ট ব্যবহারকারী |||| অ্যাকাউন্ট ব্যবহারকারী',
            fields: {
                name: 'নাম',
                company: 'কোম্পানির', 
                username:'ব্যবহারকারী নাম',
                firstName: 'প্রথম নাম',
                lastName: 'শেষ নাম'                
            },
            tabs: {
                Name: 'নাম',
                company: 'কোম্পানির',                          
            },
        },
        company: {
            name: 'ব্যবসা |||| ব্যবসা ',
            fields: {
                name: 'নাম',
                company: 'কোম্পানির',               
            },
            tabs: {
                Name: 'নাম',
                company: 'কোম্পানির'            
            },
        },
        UserAccess: {
            name: 'ব্যবহারকারী অনুমতি |||| ব্যবহারকারী অনুমতি ',  
            fields: {
                role: 'নাম',
                isActive: 'সক্রিয় / নিষ্ক্রিয়',   
                defaultCompany: 'ডিফল্ট কোম্পানি'            
            },         
        },
    },
};